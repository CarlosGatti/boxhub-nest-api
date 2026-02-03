import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskStatus } from '../prisma/home-ops-task-status.enum';
import { HomeOpsTaskTemplateCreateNestedOneWithoutTaskInstancesInput } from '../home-ops-task-template/home-ops-task-template-create-nested-one-without-task-instances.input';
import { HomeOpsWeeklyPlanCreateNestedOneWithoutTasksInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-create-nested-one-without-tasks.input';
import { UserCreateNestedOneWithoutHomeOpsTaskInstancesAssignedInput } from '../user/user-create-nested-one-without-home-ops-task-instances-assigned.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutHomeOpsTaskInstancesCompletedInput } from '../user/user-create-nested-one-without-home-ops-task-instances-completed.input';

@InputType()
export class HomeOpsTaskInstanceCreateWithoutHouseholdInput {

    @Field(() => String, {nullable:true})
    sourceKey?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:true})
    points?: number;

    @Field(() => Int, {nullable:true})
    effortWeight?: number;

    @Field(() => Int, {nullable:true})
    estimatedMinutes?: number;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => String, {nullable:true})
    slotLabel?: string;

    @Field(() => String, {nullable:true})
    windowStart?: string;

    @Field(() => String, {nullable:true})
    windowEnd?: string;

    @Field(() => HomeOpsTaskStatus, {nullable:true})
    status?: keyof typeof HomeOpsTaskStatus;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    skippedAt?: Date | string;

    @Field(() => String, {nullable:true})
    skipReason?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HomeOpsTaskTemplateCreateNestedOneWithoutTaskInstancesInput, {nullable:true})
    template?: HomeOpsTaskTemplateCreateNestedOneWithoutTaskInstancesInput;

    @Field(() => HomeOpsWeeklyPlanCreateNestedOneWithoutTasksInput, {nullable:true})
    weeklyPlan?: HomeOpsWeeklyPlanCreateNestedOneWithoutTasksInput;

    @Field(() => UserCreateNestedOneWithoutHomeOpsTaskInstancesAssignedInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutHomeOpsTaskInstancesAssignedInput)
    assignee?: UserCreateNestedOneWithoutHomeOpsTaskInstancesAssignedInput;

    @Field(() => UserCreateNestedOneWithoutHomeOpsTaskInstancesCompletedInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutHomeOpsTaskInstancesCompletedInput)
    completedBy?: UserCreateNestedOneWithoutHomeOpsTaskInstancesCompletedInput;
}
