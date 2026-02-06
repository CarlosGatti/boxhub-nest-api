import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import { AppPermissionGuard, RequireApp } from '../../core/auth/guards/app-permission.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { User } from '@generated/user/user.model';
import { HomeOpsHousehold } from '@generated/home-ops-household/home-ops-household.model';
import { HomeOpsHouseholdMember } from '@generated/home-ops-household-member/home-ops-household-member.model';
import { HomeOpsTaskTemplate } from '@generated/home-ops-task-template/home-ops-task-template.model';
import { HomeOpsTaskInstance } from '@generated/home-ops-task-instance/home-ops-task-instance.model';
import { CreateHomeOpsHouseholdInput } from './dto/create-homeops-household.input';
import { RenameHomeOpsHouseholdInput } from './dto/rename-homeops-household.input';
import { HomeOpsMemberInput } from './dto/homeops-member.input';
import { CreateHomeOpsTaskTemplateInput } from './dto/create-homeops-task-template.input';
import { UpdateHomeOpsTaskTemplateInput } from './dto/update-homeops-task-template.input';
import { ToggleHomeOpsTaskTemplateInput } from './dto/toggle-homeops-task-template.input';
import { CreateHomeOpsOneOffTaskInput } from './dto/create-homeops-oneoff-task.input';
import { GenerateHomeOpsTaskInstancesInput } from './dto/generate-homeops-task-instances.input';
import { GenerateHomeOpsWeeklyPlanInput } from './dto/generate-homeops-weekly-plan.input';
import { HomeOpsTasksFilterInput } from './dto/homeops-tasks-filter.input';
import { HomeOpsMyTasksFilterInput } from './dto/homeops-my-tasks-filter.input';
import { UpdateHomeOpsTaskStatusInput } from './dto/update-homeops-task-status.input';
import { ReassignHomeOpsTaskInput } from './dto/reassign-homeops-task.input';
import { HomeOpsService } from './homeops.service';
import { HomeOpsWeeklyPlan } from '@generated/home-ops-weekly-plan/home-ops-weekly-plan.model';

@Resolver()
@UseGuards(JwtAuthGuard, AppPermissionGuard)
export class HomeOpsResolver {
  constructor(private readonly homeOpsService: HomeOpsService) {}

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsHousehold, { name: 'createHomeOpsHousehold' })
  async createHomeOpsHousehold(
    @Args('input') input: CreateHomeOpsHouseholdInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.createHousehold(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Query(() => [HomeOpsHousehold], { name: 'myHomeOpsHouseholds' })
  async myHomeOpsHouseholds(@CurrentUser() user: User) {
    return this.homeOpsService.myHouseholds(user.id);
  }

  @RequireApp('HOMEOPS')
  @Query(() => HomeOpsHousehold, { name: 'homeOpsHousehold' })
  async homeOpsHousehold(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.getHousehold(user.id, id);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsHousehold, { name: 'renameHomeOpsHousehold' })
  async renameHomeOpsHousehold(
    @Args('input') input: RenameHomeOpsHouseholdInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.renameHousehold(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsHouseholdMember, { name: 'inviteOrAddHomeOpsMember' })
  async inviteOrAddHomeOpsMember(
    @Args('input') input: HomeOpsMemberInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.addMember(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsHouseholdMember, { name: 'updateHomeOpsMemberRole' })
  async updateHomeOpsMemberRole(
    @Args('input') input: HomeOpsMemberInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.updateMemberRole(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => Boolean, { name: 'removeHomeOpsMember' })
  async removeHomeOpsMember(
    @Args('input') input: HomeOpsMemberInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.removeMember(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => Boolean, { name: 'leaveHomeOpsHousehold' })
  async leaveHomeOpsHousehold(
    @Args('householdId', { type: () => ID }) householdId: string,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.leaveHousehold(user.id, householdId);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsTaskTemplate, { name: 'createHomeOpsTaskTemplate' })
  async createHomeOpsTaskTemplate(
    @Args('input') input: CreateHomeOpsTaskTemplateInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.createTaskTemplate(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsTaskTemplate, { name: 'updateHomeOpsTaskTemplate' })
  async updateHomeOpsTaskTemplate(
    @Args('input') input: UpdateHomeOpsTaskTemplateInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.updateTaskTemplate(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsTaskTemplate, { name: 'toggleHomeOpsTaskTemplateActive' })
  async toggleHomeOpsTaskTemplateActive(
    @Args('input') input: ToggleHomeOpsTaskTemplateInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.toggleTaskTemplate(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Query(() => [HomeOpsTaskTemplate], { name: 'homeOpsTaskTemplates' })
  async homeOpsTaskTemplates(
    @Args('householdId', { type: () => ID }) householdId: string,
    @CurrentUser() user: User,
    @Args('includeInactive', { type: () => Boolean, nullable: true, defaultValue: false })
    includeInactive?: boolean,
  ) {
    return this.homeOpsService.listTaskTemplates(user.id, householdId, includeInactive ?? false);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsTaskInstance, { name: 'createHomeOpsOneOffTask' })
  async createHomeOpsOneOffTask(
    @Args('input') input: CreateHomeOpsOneOffTaskInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.createOneOffTask(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => [HomeOpsTaskInstance], { name: 'generateHomeOpsTaskInstances' })
  async generateHomeOpsTaskInstances(
    @Args('input', { type: () => GenerateHomeOpsTaskInstancesInput })
    input: GenerateHomeOpsTaskInstancesInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.generateTaskInstances(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsWeeklyPlan, { name: 'generateHomeOpsWeeklyPlan' })
  async generateHomeOpsWeeklyPlan(
    @Args('input', { type: () => GenerateHomeOpsWeeklyPlanInput })
    input: GenerateHomeOpsWeeklyPlanInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.generateWeeklyPlan(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Query(() => [HomeOpsTaskInstance], { name: 'homeOpsTasks' })
  async homeOpsTasks(
    @Args('filter', { type: () => HomeOpsTasksFilterInput })
    filter: HomeOpsTasksFilterInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.listTasks(user.id, {
      ...filter,
    });
  }

  @RequireApp('HOMEOPS')
  @Query(() => [HomeOpsTaskInstance], { name: 'homeOpsMyTasks' })
  async homeOpsMyTasks(
    @Args('filter', { nullable: true, type: () => HomeOpsMyTasksFilterInput })
    filter: HomeOpsMyTasksFilterInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.listMyTasks(user.id, filter);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsTaskInstance, { name: 'completeHomeOpsTask' })
  async completeHomeOpsTask(
    @Args('instanceId', { type: () => ID }) instanceId: string,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.completeTask(user.id, instanceId);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsTaskInstance, { name: 'skipHomeOpsTask' })
  async skipHomeOpsTask(
    @Args('input') input: UpdateHomeOpsTaskStatusInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.skipTask(user.id, input);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsTaskInstance, { name: 'reopenHomeOpsTask' })
  async reopenHomeOpsTask(
    @Args('instanceId', { type: () => ID }) instanceId: string,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.reopenTask(user.id, instanceId);
  }

  @RequireApp('HOMEOPS')
  @Mutation(() => HomeOpsTaskInstance, { name: 'reassignHomeOpsTask' })
  async reassignHomeOpsTask(
    @Args('input') input: ReassignHomeOpsTaskInput,
    @CurrentUser() user: User,
  ) {
    return this.homeOpsService.reassignTask(user.id, input);
  }
}
