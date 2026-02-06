import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import {
  HomeOpsAssignmentMode,
  HomeOpsFrequency,
  HomeOpsTaskStatus,
  HomeOpsWeekday,
  HouseholdRole,
  LogAction,
  Prisma,
} from '@prisma/client';

import { CreateHomeOpsHouseholdInput } from './dto/create-homeops-household.input';
import { CreateHomeOpsOneOffTaskInput } from './dto/create-homeops-oneoff-task.input';
import { CreateHomeOpsTaskTemplateInput, HomeOpsTemplateSlotInput } from './dto/create-homeops-task-template.input';
import { GenerateHomeOpsTaskInstancesInput } from './dto/generate-homeops-task-instances.input';
import { GenerateHomeOpsWeeklyPlanInput, HomeOpsWeeklyPlanMode } from './dto/generate-homeops-weekly-plan.input';
import { HomeOpsMemberInput } from './dto/homeops-member.input';
import { HomeOpsMyTasksFilterInput } from './dto/homeops-my-tasks-filter.input';
import { HomeOpsTaskRangeInput } from './dto/homeops-task-range.input';
import { HomeOpsTasksFilterInput } from './dto/homeops-tasks-filter.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { ReassignHomeOpsTaskInput } from './dto/reassign-homeops-task.input';
import { RenameHomeOpsHouseholdInput } from './dto/rename-homeops-household.input';
import { ToggleHomeOpsTaskTemplateInput } from './dto/toggle-homeops-task-template.input';
import { UpdateHomeOpsTaskStatusInput } from './dto/update-homeops-task-status.input';
import { UpdateHomeOpsTaskTemplateInput } from './dto/update-homeops-task-template.input';
import { createLog } from '../../core/services/create-log';

@Injectable()
export class HomeOpsService {
  constructor(private readonly prisma: PrismaService) {}

  private toNumber(value: string | number, label: string) {
    const parsed = typeof value === 'number' ? value : Number(value);
    if (!Number.isFinite(parsed)) {
      throw new BadRequestException(`${label} must be a valid integer`);
    }
    return parsed;
  }

  private async getHouseholdRole(userId: number, householdId: number) {
    const household = await this.prisma.homeOpsHousehold.findUnique({
      where: { id: householdId },
      select: { id: true, ownerId: true },
    });

    if (!household) {
      throw new NotFoundException('Household not found');
    }

    if (household.ownerId === userId) {
      return { role: HouseholdRole.OWNER, householdId: household.id };
    }

    const member = await this.prisma.homeOpsHouseholdMember.findFirst({
      where: { householdId, userId },
    });

    if (!member) {
      throw new ForbiddenException('Household access denied');
    }

    return { role: member.role, householdId: member.householdId };
  }

  private async assertHouseholdMember(userId: number, householdId: number) {
    return this.getHouseholdRole(userId, householdId);
  }

  private async assertHouseholdAdminOrOwner(userId: number, householdId: number) {
    const { role } = await this.getHouseholdRole(userId, householdId);
    if (role !== HouseholdRole.OWNER && role !== HouseholdRole.ADMIN) {
      throw new ForbiddenException('Admin or owner access required');
    }
  }

  private async assertTaskAccess(userId: number, instanceId: number) {
    const task = await this.prisma.homeOpsTaskInstance.findUnique({
      where: { id: instanceId },
      select: { id: true, householdId: true, assigneeId: true },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    const { role } = await this.getHouseholdRole(userId, task.householdId);
    const isAdmin = role === HouseholdRole.OWNER || role === HouseholdRole.ADMIN;
    if (!isAdmin && task.assigneeId !== userId) {
      throw new ForbiddenException('Task access denied');
    }

    return task;
  }

  private parseWeekStartUTC(date: Date) {
    // Normalize to Monday 00:00 UTC for consistent weekly plan boundaries.
    const copy = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    const day = copy.getUTCDay();
    const diff = (day === 0 ? -6 : 1) - day;
    copy.setUTCDate(copy.getUTCDate() + diff);
    copy.setUTCHours(0, 0, 0, 0);
    return copy;
  }

  private parseWeekEndUTC(weekStart: Date) {
    const end = new Date(weekStart);
    end.setUTCDate(end.getUTCDate() + 6);
    end.setUTCHours(23, 59, 59, 999);
    return end;
  }

  private parseTimeToDate(date: Date, time: string) {
    const [hours, minutes] = time.split(':').map((value) => Number(value));
    const result = new Date(date);
    result.setHours(hours || 0, minutes || 0, 0, 0);
    return result;
  }

  private normalizeSlots(slots?: HomeOpsTemplateSlotInput[]) {
    if (!slots || slots.length === 0) {
      return [
        {
          label: 'Anytime',
          windowStart: '00:00',
          windowEnd: '23:59',
          order: 1,
        },
      ];
    }
    return [...slots].sort((a, b) => a.order - b.order);
  }

  private async pickAssignee(
    householdId: number,
    dueDate: Date,
    mode: HomeOpsAssignmentMode,
    fixedAssigneeId?: number | null,
  ) {
    if (mode === HomeOpsAssignmentMode.FIXED) {
      return fixedAssigneeId ?? null;
    }

    const members = await this.prisma.homeOpsHouseholdMember.findMany({
      where: { householdId },
      select: { userId: true },
      orderBy: { createdAt: 'asc' },
    });

    if (members.length === 0) {
      return null;
    }

    if (mode === HomeOpsAssignmentMode.ROUND_ROBIN) {
      const index = Math.abs(dueDate.getTime()) % members.length;
      return members[index].userId;
    }

    const weekStart = this.parseWeekStartUTC(dueDate);
    const ledgers = await this.prisma.homeOpsWorkloadLedger.findMany({
      where: { householdId, weekStart },
      select: { userId: true, pointsCompleted: true },
    });

    const ledgerMap = new Map<number, number>();
    for (const ledger of ledgers) {
      ledgerMap.set(ledger.userId, ledger.pointsCompleted);
    }

    let selected = members[0].userId;
    let minPoints = ledgerMap.get(selected) ?? 0;
    for (const member of members) {
      const points = ledgerMap.get(member.userId) ?? 0;
      if (points < minPoints) {
        minPoints = points;
        selected = member.userId;
      }
    }

    return selected;
  }

  private normalizeRange(range?: HomeOpsTaskRangeInput) {
    const from = range?.from ? new Date(range.from) : undefined;
    const to = range?.to ? new Date(range.to) : undefined;
    return { from, to };
  }

  private dayToIndex(day: HomeOpsWeekday | string) {
    const mapping: Record<string, number> = {
      SUN: 0,
      MON: 1,
      TUE: 2,
      WED: 3,
      THU: 4,
      FRI: 5,
      SAT: 6,
    };
    return mapping[day.toUpperCase()];
  }

  private *iterateDates(from: Date, to: Date, stepDays: number) {
    const current = new Date(from);
    current.setHours(0, 0, 0, 0);
    while (current <= to) {
      yield new Date(current);
      current.setDate(current.getDate() + stepDays);
    }
  }

  private generateDueDates(template: {
    frequency: HomeOpsFrequency;
    interval?: number | null;
    daysOfWeek: (HomeOpsWeekday | string)[];
    dayOfMonth?: number | null;
  }, range: { from: Date; to: Date }) {
    const { from, to } = range;
    const interval = template.interval && template.interval > 0 ? template.interval : 1;
    const dueDates: Date[] = [];

    if (template.frequency === HomeOpsFrequency.ONCE) {
      if (from <= to) {
        dueDates.push(new Date(from));
      }
      return dueDates;
    }

    if (template.frequency === HomeOpsFrequency.DAILY) {
      for (const date of this.iterateDates(from, to, interval)) {
        dueDates.push(date);
      }
      return dueDates;
    }

    if (template.frequency === HomeOpsFrequency.WEEKLY || template.frequency === HomeOpsFrequency.BIWEEKLY) {
      const stepWeeks = template.frequency === HomeOpsFrequency.BIWEEKLY ? 2 * interval : interval;
      const days = template.daysOfWeek.length > 0
        ? template.daysOfWeek
        : ['MON'];
      for (const date of this.iterateDates(from, to, stepWeeks * 7)) {
        for (const day of days) {
          const dayIndex = this.dayToIndex(day);
          if (dayIndex === undefined) continue;
          const candidate = new Date(date);
          const diff = dayIndex - candidate.getDay();
          candidate.setDate(candidate.getDate() + diff);
          if (candidate >= from && candidate <= to) {
            dueDates.push(candidate);
          }
        }
      }
      return dueDates;
    }

    if (template.frequency === HomeOpsFrequency.MONTHLY) {
      const day = template.dayOfMonth ?? from.getDate();
      const cursor = new Date(from.getFullYear(), from.getMonth(), 1);
      while (cursor <= to) {
        const candidate = new Date(cursor.getFullYear(), cursor.getMonth(), day);
        if (candidate >= from && candidate <= to) {
          dueDates.push(candidate);
        }
        cursor.setMonth(cursor.getMonth() + interval);
      }
      return dueDates;
    }

    if (template.frequency === HomeOpsFrequency.CUSTOM) {
      for (const date of this.iterateDates(from, to, interval)) {
        dueDates.push(date);
      }
    }

    return dueDates;
  }

  private buildSourceKey(templateId: number, slotLabel: string, dueDate: Date) {
    const dateKey = dueDate.toISOString().slice(0, 10);
    return `${templateId}:${slotLabel}:${dateKey}`;
  }

  async createHousehold(userId: number, input: CreateHomeOpsHouseholdInput) {
    const app = await this.prisma.app.findUnique({ where: { code: 'HOMEOPS' } });
    if (!app) {
      throw new BadRequestException('HOMEOPS app not seeded');
    }

    const household = await this.prisma.$transaction(async (tx) => {
      const created = await tx.homeOpsHousehold.create({
        data: {
          name: input.name,
          ownerId: userId,
          appId: app.id,
        },
      });

      await tx.homeOpsHouseholdMember.create({
        data: {
          householdId: created.id,
          userId,
          role: HouseholdRole.OWNER,
        },
      });

      return created;
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps household created: ${household.name}`,
      route: 'createHomeOpsHousehold',
      metadata: { householdId: household.id },
    });

    return household;
  }

  async myHouseholds(userId: number) {
    return this.prisma.homeOpsHousehold.findMany({
      where: {
        OR: [
          { ownerId: userId },
          { members: { some: { userId } } },
        ],
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getHousehold(userId: number, householdId: string) {
    const id = this.toNumber(householdId, 'householdId');
    await this.assertHouseholdMember(userId, id);
    return this.prisma.homeOpsHousehold.findUnique({
      where: { id },
    });
  }

  async renameHousehold(userId: number, input: RenameHomeOpsHouseholdInput) {
    const householdId = this.toNumber(input.householdId, 'householdId');
    await this.assertHouseholdAdminOrOwner(userId, householdId);
    const household = await this.prisma.homeOpsHousehold.update({
      where: { id: householdId },
      data: { name: input.name },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps household renamed: ${household.name}`,
      route: 'renameHomeOpsHousehold',
      metadata: { householdId: household.id },
    });

    return household;
  }

  async addMember(userId: number, input: HomeOpsMemberInput) {
    const householdId = this.toNumber(input.householdId, 'householdId');
    const memberUserId = this.toNumber(input.userId, 'userId');
    await this.assertHouseholdAdminOrOwner(userId, householdId);

    if (input.role === HouseholdRole.OWNER) {
      throw new BadRequestException('Only one owner is allowed');
    }

    const member = await this.prisma.homeOpsHouseholdMember.upsert({
      where: {
        householdId_userId: {
          householdId,
          userId: memberUserId,
        },
      },
      update: { role: input.role },
      create: {
        householdId,
        userId: memberUserId,
        role: input.role,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps member added/updated`,
      route: 'inviteOrAddHomeOpsMember',
      metadata: { householdId, memberUserId, role: input.role },
    });

    return member;
  }

  async updateMemberRole(userId: number, input: HomeOpsMemberInput) {
    const householdId = this.toNumber(input.householdId, 'householdId');
    const memberUserId = this.toNumber(input.userId, 'userId');
    await this.assertHouseholdAdminOrOwner(userId, householdId);

    const member = await this.prisma.homeOpsHouseholdMember.update({
      where: {
        householdId_userId: {
          householdId,
          userId: memberUserId,
        },
      },
      data: { role: input.role },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps member role updated`,
      route: 'updateHomeOpsMemberRole',
      metadata: { householdId, memberUserId, role: input.role },
    });

    return member;
  }

  async removeMember(userId: number, input: HomeOpsMemberInput) {
    const householdId = this.toNumber(input.householdId, 'householdId');
    const memberUserId = this.toNumber(input.userId, 'userId');
    await this.assertHouseholdAdminOrOwner(userId, householdId);

    const household = await this.prisma.homeOpsHousehold.findUnique({
      where: { id: householdId },
      select: { ownerId: true },
    });

    if (!household) {
      throw new NotFoundException('Household not found');
    }

    if (household.ownerId === memberUserId) {
      throw new BadRequestException('Owner cannot be removed');
    }

    await this.prisma.homeOpsHouseholdMember.delete({
      where: {
        householdId_userId: {
          householdId,
          userId: memberUserId,
        },
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps member removed`,
      route: 'removeHomeOpsMember',
      metadata: { householdId, memberUserId },
    });

    return true;
  }

  async leaveHousehold(userId: number, householdId: string) {
    const id = this.toNumber(householdId, 'householdId');
    const household = await this.prisma.homeOpsHousehold.findUnique({
      where: { id },
      select: { ownerId: true },
    });

    if (!household) {
      throw new NotFoundException('Household not found');
    }

    if (household.ownerId === userId) {
      throw new BadRequestException('Owner cannot leave household');
    }

    await this.prisma.homeOpsHouseholdMember.delete({
      where: {
        householdId_userId: {
          householdId: id,
          userId,
        },
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps member left household`,
      route: 'leaveHomeOpsHousehold',
      metadata: { householdId: id },
    });

    return true;
  }

  async createTaskTemplate(userId: number, input: CreateHomeOpsTaskTemplateInput) {
    const householdId = this.toNumber(input.householdId, 'householdId');
    const fixedAssigneeId = input.fixedAssigneeId
      ? this.toNumber(input.fixedAssigneeId, 'fixedAssigneeId')
      : undefined;
    await this.assertHouseholdAdminOrOwner(userId, householdId);

    const assignmentMode = input.assignmentMode ?? HomeOpsAssignmentMode.FIXED;
    if (assignmentMode === HomeOpsAssignmentMode.FIXED && !fixedAssigneeId) {
      throw new BadRequestException('fixedAssigneeId is required for FIXED assignment mode');
    }

    if (fixedAssigneeId) {
      await this.assertHouseholdMember(fixedAssigneeId, householdId);
    }

    const normalizedSlots = this.normalizeSlots(input.slots);

    const template = await this.prisma.homeOpsTaskTemplate.create({
      data: {
        householdId,
        title: input.title,
        description: input.description ?? null,
        category: input.category ?? null,
        points: input.points ?? 1,
        effortWeight: input.effortWeight ?? 1,
        estimatedMinutes: input.estimatedMinutes ?? null,
        frequency: input.frequency,
        occurrences: input.occurrences ?? null,
        interval: input.interval ?? null,
        daysOfWeek: input.daysOfWeek ?? [],
        dayOfMonth: input.dayOfMonth ?? null,
        timezone: input.timezone ?? 'America/Denver',
        assignmentMode,
        fixedAssigneeId: fixedAssigneeId ?? null,
        isActive: input.isActive ?? true,
        createdById: userId,
        slots: {
          createMany: {
            data: normalizedSlots.map((slot) => ({
              label: slot.label,
              windowStart: slot.windowStart,
              windowEnd: slot.windowEnd,
              order: slot.order,
            })),
          },
        },
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps template created: ${template.title}`,
      route: 'createHomeOpsTaskTemplate',
      metadata: { householdId, templateId: template.id },
    });

    return template;
  }

  async updateTaskTemplate(userId: number, input: UpdateHomeOpsTaskTemplateInput) {
    const templateId = this.toNumber(input.id, 'id');
    const template = await this.prisma.homeOpsTaskTemplate.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      throw new NotFoundException('Template not found');
    }

    await this.assertHouseholdAdminOrOwner(userId, template.householdId);

    const assignmentMode = input.assignmentMode ?? template.assignmentMode;
    const fixedAssigneeId = assignmentMode === HomeOpsAssignmentMode.FIXED
      ? (input.fixedAssigneeId ? this.toNumber(input.fixedAssigneeId, 'fixedAssigneeId') : template.fixedAssigneeId)
      : null;

    if (assignmentMode === HomeOpsAssignmentMode.FIXED && !fixedAssigneeId) {
      throw new BadRequestException('fixedAssigneeId is required for FIXED assignment mode');
    }

    if (fixedAssigneeId) {
      await this.assertHouseholdMember(fixedAssigneeId, template.householdId);
    }

    const updated = await this.prisma.$transaction(async (tx) => {
      if (input.slots) {
        await tx.homeOpsTaskTemplateSlot.deleteMany({
          where: { templateId },
        });
        const normalizedSlots = this.normalizeSlots(input.slots);
        await tx.homeOpsTaskTemplateSlot.createMany({
          data: normalizedSlots.map((slot) => ({
            templateId,
            label: slot.label,
            windowStart: slot.windowStart,
            windowEnd: slot.windowEnd,
            order: slot.order,
          })),
        });
      }

      return tx.homeOpsTaskTemplate.update({
        where: { id: templateId },
        data: {
          title: input.title ?? undefined,
          description: input.description ?? undefined,
          category: input.category ?? undefined,
          points: input.points ?? undefined,
          effortWeight: input.effortWeight ?? undefined,
          estimatedMinutes: input.estimatedMinutes ?? undefined,
          frequency: input.frequency ?? undefined,
          occurrences: input.occurrences ?? undefined,
          interval: input.interval ?? undefined,
          daysOfWeek: input.daysOfWeek ?? undefined,
          dayOfMonth: input.dayOfMonth ?? undefined,
          timezone: input.timezone ?? undefined,
          assignmentMode,
          fixedAssigneeId,
          isActive: input.isActive ?? undefined,
        },
      });
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps template updated: ${updated.title}`,
      route: 'updateHomeOpsTaskTemplate',
      metadata: { householdId: updated.householdId, templateId: updated.id },
    });

    return updated;
  }

  async toggleTaskTemplate(userId: number, input: ToggleHomeOpsTaskTemplateInput) {
    const templateId = this.toNumber(input.id, 'id');
    const template = await this.prisma.homeOpsTaskTemplate.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      throw new NotFoundException('Template not found');
    }

    await this.assertHouseholdAdminOrOwner(userId, template.householdId);

    const updated = await this.prisma.homeOpsTaskTemplate.update({
      where: { id: templateId },
      data: { isActive: input.isActive },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps template active=${input.isActive}`,
      route: 'toggleHomeOpsTaskTemplateActive',
      metadata: { householdId: updated.householdId, templateId: updated.id },
    });

    return updated;
  }

  async listTaskTemplates(userId: number, householdId: string, includeInactive = false) {
    const id = this.toNumber(householdId, 'householdId');
    await this.assertHouseholdMember(userId, id);
    return this.prisma.homeOpsTaskTemplate.findMany({
      where: {
        householdId: id,
        ...(includeInactive ? {} : { isActive: true }),
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async createOneOffTask(userId: number, input: CreateHomeOpsOneOffTaskInput) {
    const householdId = this.toNumber(input.householdId, 'householdId');
    const assigneeId = input.assigneeId
      ? this.toNumber(input.assigneeId, 'assigneeId')
      : userId;
    await this.assertHouseholdMember(userId, householdId);

    if (assigneeId !== userId) {
      await this.assertHouseholdAdminOrOwner(userId, householdId);
    }
    await this.assertHouseholdMember(assigneeId, householdId);

    const dueDate = input.dueDate ? new Date(input.dueDate) : new Date();

    const task = await this.prisma.homeOpsTaskInstance.create({
      data: {
        householdId,
        templateId: null,
        title: input.title,
        description: input.description ?? null,
        category: input.category ?? null,
        points: input.points ?? 1,
        effortWeight: input.points ?? 1,
        estimatedMinutes: input.estimatedMinutes ?? null,
        dueDate,
        assigneeId,
        status: HomeOpsTaskStatus.OPEN,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps one-off task created: ${task.title}`,
      route: 'createHomeOpsOneOffTask',
      metadata: { householdId, instanceId: task.id },
    });

    return task;
  }

  async generateTaskInstances(userId: number, input: GenerateHomeOpsTaskInstancesInput) {
    const householdId = this.toNumber(input.householdId, 'householdId');
    await this.assertHouseholdAdminOrOwner(userId, householdId);

    const { from, to } = this.normalizeRange(input.range);
    if (!from || !to) {
      throw new BadRequestException('from and to dates are required');
    }

    const templates = await this.prisma.homeOpsTaskTemplate.findMany({
      where: { householdId, isActive: true },
      include: { slots: true },
    });

    const createdInstances: any[] = [];
    for (const template of templates) {
      const dueDates = this.generateDueDates(template, { from, to });
      const slots = this.normalizeSlots(template.slots as any);
      for (const dueDate of dueDates) {
        for (const slot of slots) {
          const slotDueDate = this.parseTimeToDate(dueDate, slot.windowStart);
          const exists = await this.prisma.homeOpsTaskInstance.findFirst({
            where: {
              householdId,
              templateId: template.id,
              dueDate: slotDueDate,
              slotLabel: slot.label,
            },
          });
          if (exists) {
            continue;
          }

          const assigneeId = await this.pickAssignee(
            householdId,
            slotDueDate,
            template.assignmentMode,
            template.fixedAssigneeId,
          );

          const instance = await this.prisma.homeOpsTaskInstance.create({
            data: {
              householdId,
              templateId: template.id,
              title: slot.label ? `${template.title} (${slot.label})` : template.title,
              description: template.description ?? null,
              category: template.category ?? null,
              points: template.points,
              effortWeight: template.effortWeight ?? 1,
              estimatedMinutes: template.estimatedMinutes ?? null,
              dueDate: slotDueDate,
              slotLabel: slot.label,
              windowStart: slot.windowStart,
              windowEnd: slot.windowEnd,
              assigneeId,
              status: HomeOpsTaskStatus.OPEN,
            },
          });
          createdInstances.push(instance);
        }
      }
    }

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps tasks generated`,
      route: 'generateHomeOpsTaskInstances',
      metadata: { householdId, count: createdInstances.length },
    });

    return createdInstances;
  }

  async generateWeeklyPlan(userId: number, input: GenerateHomeOpsWeeklyPlanInput) {
    const householdId = this.toNumber(input.householdId, 'householdId');
    await this.assertHouseholdAdminOrOwner(userId, householdId);

    const weekStart = this.parseWeekStartUTC(new Date(input.weekStartDate));
    const weekEnd = this.parseWeekEndUTC(weekStart);
    const mode = input.mode ?? HomeOpsWeeklyPlanMode.OPEN_OR_CREATE;

    // Idempotency: weekly plan is unique by (householdId, weekStartDate).
    const plan = await this.prisma.homeOpsWeeklyPlan.upsert({
      where: {
        householdId_weekStartDate: {
          householdId,
          weekStartDate: weekStart,
        },
      },
      update: {},
      create: {
        householdId,
        weekStartDate: weekStart,
      },
    });

    if (mode === HomeOpsWeeklyPlanMode.OPEN_OR_CREATE) {
      return plan;
    }

    if (mode === HomeOpsWeeklyPlanMode.RESET) {
      await this.prisma.homeOpsTaskInstance.deleteMany({
        where: { weeklyPlanId: plan.id },
      });
    }

    const templates = await this.prisma.homeOpsTaskTemplate.findMany({
      where: { householdId, isActive: true },
      include: { slots: true },
    });

    for (const template of templates) {
      const dueDates = this.generateDueDates(template, { from: weekStart, to: weekEnd });
      const slots = this.normalizeSlots(template.slots as any);
      for (const dueDate of dueDates) {
        for (const slot of slots) {
          const slotDueDate = this.parseTimeToDate(dueDate, slot.windowStart);
          const sourceKey = this.buildSourceKey(template.id, slot.label, slotDueDate);

          if (mode !== HomeOpsWeeklyPlanMode.RESET) {
            const exists = await this.prisma.homeOpsTaskInstance.findFirst({
              where: {
                weeklyPlanId: plan.id,
                sourceKey,
              },
            });
            if (exists) {
              continue;
            }
          }

          const assigneeId = await this.pickAssignee(
            householdId,
            slotDueDate,
            template.assignmentMode,
            template.fixedAssigneeId,
          );

          await this.prisma.homeOpsTaskInstance.create({
            data: {
              householdId,
              weeklyPlanId: plan.id,
              sourceKey,
              templateId: template.id,
              title: slot.label ? `${template.title} (${slot.label})` : template.title,
              description: template.description ?? null,
              category: template.category ?? null,
              points: template.points,
              effortWeight: template.effortWeight ?? 1,
              estimatedMinutes: template.estimatedMinutes ?? null,
              dueDate: slotDueDate,
              slotLabel: slot.label,
              windowStart: slot.windowStart,
              windowEnd: slot.windowEnd,
              assigneeId,
              status: HomeOpsTaskStatus.OPEN,
            },
          });
        }
      }
    }

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps weekly plan generated`,
      route: 'generateHomeOpsWeeklyPlan',
      metadata: { householdId, weeklyPlanId: plan.id, mode },
    });

    return plan;
  }

  async listTasks(userId: number, filter: HomeOpsTasksFilterInput) {
    if (!filter.householdId) {
      throw new BadRequestException('householdId is required');
    }
    const householdId = this.toNumber(filter.householdId, 'householdId');
    const assigneeId = filter.assigneeId ? this.toNumber(filter.assigneeId, 'assigneeId') : undefined;
    await this.assertHouseholdMember(userId, householdId);

    const { from, to } = this.normalizeRange(filter.range);
    const where: Prisma.HomeOpsTaskInstanceWhereInput = {
      householdId,
      ...(filter.status ? { status: filter.status } : {}),
      ...(assigneeId ? { assigneeId } : {}),
      ...(from || to
        ? {
            dueDate: {
              ...(from ? { gte: from } : {}),
              ...(to ? { lte: to } : {}),
            },
          }
        : {}),
    };

    return this.prisma.homeOpsTaskInstance.findMany({
      where,
      orderBy: { dueDate: 'asc' },
    });
  }

  async listMyTasks(userId: number, filter?: HomeOpsMyTasksFilterInput) {
    const { from, to } = this.normalizeRange(filter?.range);
    const where: Prisma.HomeOpsTaskInstanceWhereInput = {
      assigneeId: userId,
      ...(filter?.status ? { status: filter.status } : {}),
      ...(from || to
        ? {
            dueDate: {
              ...(from ? { gte: from } : {}),
              ...(to ? { lte: to } : {}),
            },
          }
        : {}),
    };

    return this.prisma.homeOpsTaskInstance.findMany({
      where,
      orderBy: { dueDate: 'asc' },
    });
  }

  async completeTask(userId: number, instanceId: string) {
    const id = this.toNumber(instanceId, 'instanceId');
    const task = await this.assertTaskAccess(userId, id);

    const updated = await this.prisma.homeOpsTaskInstance.update({
      where: { id },
      data: {
        status: HomeOpsTaskStatus.DONE,
        completedAt: new Date(),
        completedById: userId,
      },
    });

    const weekStart = this.parseWeekStartUTC(updated.completedAt ?? new Date());
    await this.prisma.homeOpsWorkloadLedger.upsert({
      where: {
        householdId_userId_weekStart: {
          householdId: updated.householdId,
          userId,
          weekStart,
        },
      },
      update: {
        pointsCompleted: { increment: updated.points },
        minutesCompleted: { increment: updated.estimatedMinutes ?? 0 },
        tasksCompleted: { increment: 1 },
      },
      create: {
        householdId: updated.householdId,
        userId,
        weekStart,
        pointsCompleted: updated.points,
        minutesCompleted: updated.estimatedMinutes ?? 0,
        tasksCompleted: 1,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps task completed`,
      route: 'completeHomeOpsTask',
      metadata: { householdId: updated.householdId, instanceId: updated.id },
    });

    return updated;
  }

  async skipTask(userId: number, input: UpdateHomeOpsTaskStatusInput) {
    const instanceId = this.toNumber(input.instanceId, 'instanceId');
    const task = await this.assertTaskAccess(userId, instanceId);

    const updated = await this.prisma.homeOpsTaskInstance.update({
      where: { id: task.id },
      data: {
        status: HomeOpsTaskStatus.SKIPPED,
        skippedAt: new Date(),
        skipReason: input.reason ?? null,
        completedById: userId,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps task skipped`,
      route: 'skipHomeOpsTask',
      metadata: { householdId: updated.householdId, instanceId: updated.id },
    });

    return updated;
  }

  async reopenTask(userId: number, instanceId: string) {
    const id = this.toNumber(instanceId, 'instanceId');
    const task = await this.assertTaskAccess(userId, id);

    const updated = await this.prisma.homeOpsTaskInstance.update({
      where: { id: task.id },
      data: {
        status: HomeOpsTaskStatus.OPEN,
        completedAt: null,
        completedById: null,
        skippedAt: null,
        skipReason: null,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps task reopened`,
      route: 'reopenHomeOpsTask',
      metadata: { householdId: updated.householdId, instanceId: updated.id },
    });

    return updated;
  }

  async reassignTask(userId: number, input: ReassignHomeOpsTaskInput) {
    const instanceId = this.toNumber(input.instanceId, 'instanceId');
    const assigneeId = this.toNumber(input.assigneeId, 'assigneeId');
    const task = await this.prisma.homeOpsTaskInstance.findUnique({
      where: { id: instanceId },
      select: { id: true, householdId: true },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    await this.assertHouseholdAdminOrOwner(userId, task.householdId);
    await this.assertHouseholdMember(assigneeId, task.householdId);

    const updated = await this.prisma.homeOpsTaskInstance.update({
      where: { id: task.id },
      data: { assigneeId },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `HomeOps task reassigned`,
      route: 'reassignHomeOpsTask',
      metadata: { householdId: updated.householdId, instanceId: updated.id, assigneeId },
    });

    return updated;
  }
}
