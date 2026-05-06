import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import {
  PomodoroSessionMode as PrismaPomodoroSessionMode,
  PomodoroSessionStatus as PrismaPomodoroSessionStatus,
  PomodoroTaskStatus as PrismaPomodoroTaskStatus,
} from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreatePomodoroTaskDto } from './dto/create-pomodoro-task.dto';
import { PomodoroSessionsFilterInput } from './dto/pomodoro-sessions-filter.input';
import { PomodoroStatsRangeInput } from './dto/pomodoro-stats-range.input';
import { UpdatePomodoroTaskDto } from './dto/update-pomodoro-task.dto';
import { UpdatePomodoroSettingsDto } from './dto/update-pomodoro-settings.dto';
import { StartPomodoroSessionDto } from './dto/start-pomodoro-session.dto';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class PomodoroService {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(userId: number, input: CreatePomodoroTaskDto) {
    if (input.projectId) {
      await this.ensureDefinedProjectExists(input.projectId);
    }

    return this.prisma.pomodoroTask.create({
      data: {
        userId,
        title: input.title.trim(),
        description: input.description,
        status: (input.status as PrismaPomodoroTaskStatus | undefined) ?? PrismaPomodoroTaskStatus.TODO,
        projectId: input.projectId,
      },
    });
  }

  async listTasks(userId: number) {
    return this.prisma.pomodoroTask.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async updateTask(userId: number, id: number, input: UpdatePomodoroTaskDto) {
    await this.ensureTaskOwnership(userId, id);

    if (input.projectId) {
      await this.ensureDefinedProjectExists(input.projectId);
    }

    return this.prisma.pomodoroTask.update({
      where: { id },
      data: {
        title: input.title?.trim(),
        description: input.description,
        status: input.status,
        projectId: input.projectId,
      },
    });
  }

  async deleteOrArchiveTask(userId: number, id: number, archive: boolean) {
    await this.ensureTaskOwnership(userId, id);

    if (archive) {
      return this.prisma.pomodoroTask.update({
        where: { id },
        data: { status: PrismaPomodoroTaskStatus.ARCHIVED },
      });
    }

    return this.prisma.pomodoroTask.delete({
      where: { id },
    });
  }

  async listSessions(
    userId: number,
    filter?: PomodoroSessionsFilterInput,
    take = 50,
    skip = 0,
  ) {
    return this.prisma.pomodoroSession.findMany({
      where: {
        userId,
        status: filter?.status as PrismaPomodoroSessionStatus | undefined,
        mode: filter?.mode as PrismaPomodoroSessionMode | undefined,
      },
      take,
      skip,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getActiveSession(userId: number) {
    return this.prisma.pomodoroSession.findFirst({
      where: {
        userId,
        status: {
          in: [PrismaPomodoroSessionStatus.RUNNING, PrismaPomodoroSessionStatus.PAUSED],
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async startSession(userId: number, input: StartPomodoroSessionDto) {
    if (input.taskId) {
      await this.ensureTaskOwnership(userId, input.taskId);
    }

    if (input.projectId) {
      await this.ensureDefinedProjectExists(input.projectId);
    }

    const activeSession = await this.getActiveSession(userId);
    if (activeSession) {
      throw new BadRequestException(
        `User already has an active session (id=${activeSession.id}, status=${activeSession.status})`,
      );
    }

    return this.prisma.pomodoroSession.create({
      data: {
        userId,
        taskId: input.taskId,
        projectId: input.projectId,
        mode: input.mode as PrismaPomodoroSessionMode,
        status: PrismaPomodoroSessionStatus.RUNNING,
        durationMinutes: input.durationMinutes,
        startedAt: new Date(),
      },
    });
  }

  async pauseSession(userId: number, id: number) {
    const session = await this.ensureSessionOwnership(userId, id);
    if (session.status !== PrismaPomodoroSessionStatus.RUNNING) {
      throw new BadRequestException('Only running sessions can be paused');
    }

    return this.prisma.pomodoroSession.update({
      where: { id },
      data: {
        status: PrismaPomodoroSessionStatus.PAUSED,
        pausedAt: new Date(),
      },
    });
  }

  async resumeSession(userId: number, id: number) {
    const session = await this.ensureSessionOwnership(userId, id);
    if (session.status !== PrismaPomodoroSessionStatus.PAUSED) {
      throw new BadRequestException('Only paused sessions can be resumed');
    }

    return this.prisma.pomodoroSession.update({
      where: { id },
      data: {
        status: PrismaPomodoroSessionStatus.RUNNING,
        resumedAt: new Date(),
      },
    });
  }

  async completeSession(userId: number, id: number) {
    const session = await this.ensureSessionOwnership(userId, id);

    if (!session.startedAt) {
      throw new BadRequestException('Running session must have startedAt');
    }

    if (
      session.status === PrismaPomodoroSessionStatus.COMPLETED ||
      session.status === PrismaPomodoroSessionStatus.CANCELLED
    ) {
      throw new BadRequestException('Session already finalized');
    }

    return this.prisma.pomodoroSession.update({
      where: { id },
      data: {
        status: PrismaPomodoroSessionStatus.COMPLETED,
        completedAt: new Date(),
      },
    });
  }

  async cancelSession(userId: number, id: number) {
    const session = await this.ensureSessionOwnership(userId, id);
    if (session.status === PrismaPomodoroSessionStatus.CANCELLED) {
      throw new BadRequestException('Session already cancelled');
    }
    if (session.status === PrismaPomodoroSessionStatus.COMPLETED) {
      throw new BadRequestException('Completed session cannot be cancelled');
    }

    return this.prisma.pomodoroSession.update({
      where: { id },
      data: {
        status: PrismaPomodoroSessionStatus.CANCELLED,
        cancelledAt: new Date(),
      },
    });
  }

  async getStats(userId: number) {
    return this.getStatsForRange(userId);
  }

  async getStatsForRange(userId: number, range?: PomodoroStatsRangeInput) {
    const settings = await this.getOrCreateSettings(userId);
    const timezoneName = this.validateTimezone(range?.timezone ?? settings.timezone);

    const { startDate, endDate } = this.resolveRangeBoundaries(timezoneName, range);

    const completedFilter = {
      userId,
      status: PrismaPomodoroSessionStatus.COMPLETED,
    };

    const [totalCompletedSessions, totalFocusMinutes, completedToday, focusToday] =
      await this.prisma.$transaction([
        this.prisma.pomodoroSession.count({
          where: completedFilter,
        }),
        this.prisma.pomodoroSession.aggregate({
          where: {
            ...completedFilter,
            mode: PrismaPomodoroSessionMode.FOCUS,
          },
          _sum: { durationMinutes: true },
        }),
        this.prisma.pomodoroSession.count({
          where: {
            ...completedFilter,
            completedAt: {
              gte: startDate,
              lte: endDate,
            },
          },
        }),
        this.prisma.pomodoroSession.aggregate({
          where: {
            ...completedFilter,
            mode: PrismaPomodoroSessionMode.FOCUS,
            completedAt: {
              gte: startDate,
              lte: endDate,
            },
          },
          _sum: { durationMinutes: true },
        }),
      ]);

    return {
      totalCompletedSessions,
      totalFocusMinutes: totalFocusMinutes._sum.durationMinutes ?? 0,
      completedSessionsToday: completedToday,
      focusMinutesToday: focusToday._sum.durationMinutes ?? 0,
    };
  }

  async getOrCreateSettings(userId: number) {
    return this.prisma.pomodoroUserSettings.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });
  }

  async updateSettings(userId: number, input: UpdatePomodoroSettingsDto) {
    const timezoneName = input.timezone ? this.validateTimezone(input.timezone) : undefined;

    return this.prisma.pomodoroUserSettings.upsert({
      where: { userId },
      update: {
        focusMinutes: input.focusMinutes,
        shortBreakMinutes: input.shortBreakMinutes,
        longBreakMinutes: input.longBreakMinutes,
        longBreakEvery: input.longBreakEvery,
        autoStartBreaks: input.autoStartBreaks,
        autoStartFocus: input.autoStartFocus,
        timezone: timezoneName,
      },
      create: {
        userId,
        focusMinutes: input.focusMinutes ?? 25,
        shortBreakMinutes: input.shortBreakMinutes ?? 5,
        longBreakMinutes: input.longBreakMinutes ?? 15,
        longBreakEvery: input.longBreakEvery ?? 4,
        autoStartBreaks: input.autoStartBreaks ?? false,
        autoStartFocus: input.autoStartFocus ?? false,
        timezone: timezoneName ?? 'UTC',
      },
    });
  }

  private async ensureTaskOwnership(userId: number, id: number) {
    const task = await this.prisma.pomodoroTask.findFirst({
      where: { id, userId },
    });
    if (!task) {
      throw new NotFoundException('Pomodoro task not found');
    }
    return task;
  }

  private async ensureSessionOwnership(userId: number, id: number) {
    const session = await this.prisma.pomodoroSession.findFirst({
      where: { id, userId },
    });
    if (!session) {
      throw new NotFoundException('Pomodoro session not found');
    }
    return session;
  }

  private async ensureDefinedProjectExists(projectId: number) {
    const project = await this.prisma.definedProject.findUnique({
      where: { id: projectId },
      select: { id: true },
    });
    if (!project) {
      throw new BadRequestException('Defined project not found');
    }
  }

  private validateTimezone(timezoneName: string) {
    try {
      Intl.DateTimeFormat(undefined, { timeZone: timezoneName });
      return timezoneName;
    } catch {
      throw new BadRequestException(`Invalid timezone: ${timezoneName}`);
    }
  }

  private resolveRangeBoundaries(timezoneName: string, range?: PomodoroStatsRangeInput) {
    const now = dayjs().tz(timezoneName);

    const startDate = range?.from
      ? dayjs.tz(range.from, timezoneName).toDate()
      : now.startOf('day').toDate();

    const endDate = range?.to
      ? dayjs.tz(range.to, timezoneName).toDate()
      : now.endOf('day').toDate();

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      throw new BadRequestException('Invalid date range. Use ISO-8601 datetime strings.');
    }

    if (startDate > endDate) {
      throw new BadRequestException('Invalid date range. `from` must be before `to`.');
    }

    return { startDate, endDate };
  }
}
