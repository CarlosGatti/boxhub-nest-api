import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PomodoroSession } from '@generated/pomodoro-session/pomodoro-session.model';
import { PomodoroTask } from '@generated/pomodoro-task/pomodoro-task.model';
import { User } from '@generated/user/user.model';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/current-user.decorator';
import { CreatePomodoroTaskDto } from './dto/create-pomodoro-task.dto';
import { PomodoroSessionsFilterInput } from './dto/pomodoro-sessions-filter.input';
import { PomodoroStatsRangeInput } from './dto/pomodoro-stats-range.input';
import { StartPomodoroSessionDto } from './dto/start-pomodoro-session.dto';
import { UpdatePomodoroTaskDto } from './dto/update-pomodoro-task.dto';
import { UpdatePomodoroSettingsDto } from './dto/update-pomodoro-settings.dto';
import { PomodoroService } from './pomodoro.service';
import { PomodoroStats } from './types/pomodoro-stats.type';
import { PomodoroUserSettingsType } from './types/pomodoro-user-settings.type';

@Resolver()
export class PomodoroResolver {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [PomodoroTask], { name: 'pomodoroTasks' })
  async pomodoroTasks(@CurrentUser() user: User) {
    return this.pomodoroService.listTasks(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroTask)
  async createPomodoroTask(
    @Args('data') data: CreatePomodoroTaskDto,
    @CurrentUser() user: User,
  ) {
    return this.pomodoroService.createTask(user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroTask)
  async updatePomodoroTask(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePomodoroTaskDto,
    @CurrentUser() user: User,
  ) {
    return this.pomodoroService.updateTask(user.id, id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroTask)
  async deletePomodoroTask(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
    @Args('archive', { type: () => Boolean, nullable: true }) archive = false,
  ) {
    return this.pomodoroService.deleteOrArchiveTask(user.id, id, archive);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [PomodoroSession], { name: 'pomodoroSessions' })
  async pomodoroSessions(
    @CurrentUser() user: User,
    @Args('filter', { nullable: true }) filter?: PomodoroSessionsFilterInput,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
  ) {
    return this.pomodoroService.listSessions(user.id, filter, take, skip);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => PomodoroSession, { name: 'pomodoroMyActiveSession', nullable: true })
  async pomodoroMyActiveSession(@CurrentUser() user: User) {
    return this.pomodoroService.getActiveSession(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => PomodoroUserSettingsType, { name: 'pomodoroMySettings' })
  async pomodoroMySettings(@CurrentUser() user: User) {
    return this.pomodoroService.getOrCreateSettings(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroSession)
  async startPomodoroSession(
    @Args('data') data: StartPomodoroSessionDto,
    @CurrentUser() user: User,
  ) {
    return this.pomodoroService.startSession(user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroSession)
  async pausePomodoroSession(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.pomodoroService.pauseSession(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroSession)
  async resumePomodoroSession(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.pomodoroService.resumeSession(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroSession)
  async completePomodoroSession(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.pomodoroService.completeSession(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroSession)
  async cancelPomodoroSession(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.pomodoroService.cancelSession(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PomodoroUserSettingsType)
  async updatePomodoroSettings(
    @Args('data') data: UpdatePomodoroSettingsDto,
    @CurrentUser() user: User,
  ) {
    return this.pomodoroService.updateSettings(user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => PomodoroStats, { name: 'pomodoroStats' })
  async pomodoroStats(
    @CurrentUser() user: User,
    @Args('range', { nullable: true }) range?: PomodoroStatsRangeInput,
  ) {
    return this.pomodoroService.getStatsForRange(user.id, range);
  }
}
