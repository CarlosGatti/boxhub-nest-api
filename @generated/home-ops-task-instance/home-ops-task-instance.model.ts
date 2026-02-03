import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskStatus } from '../prisma/home-ops-task-status.enum';
import { HomeOpsHousehold } from '../home-ops-household/home-ops-household.model';
import { HomeOpsTaskTemplate } from '../home-ops-task-template/home-ops-task-template.model';
import { HomeOpsWeeklyPlan } from '../home-ops-weekly-plan/home-ops-weekly-plan.model';
import { User } from '../user/user.model';

@ObjectType()
export class HomeOpsTaskInstance {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:true})
    templateId!: number | null;

    @Field(() => Int, {nullable:true})
    weeklyPlanId!: number | null;

    @Field(() => String, {nullable:true})
    sourceKey!: string | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    category!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:1})
    points!: number;

    @Field(() => Int, {nullable:false,defaultValue:1})
    effortWeight!: number;

    @Field(() => Int, {nullable:true})
    estimatedMinutes!: number | null;

    @Field(() => Date, {nullable:false})
    dueDate!: Date;

    @Field(() => String, {nullable:true})
    slotLabel!: string | null;

    @Field(() => String, {nullable:true})
    windowStart!: string | null;

    @Field(() => String, {nullable:true})
    windowEnd!: string | null;

    @Field(() => Int, {nullable:true})
    assigneeId!: number | null;

    @Field(() => HomeOpsTaskStatus, {nullable:false,defaultValue:'OPEN'})
    status!: keyof typeof HomeOpsTaskStatus;

    @Field(() => Date, {nullable:true})
    completedAt!: Date | null;

    @Field(() => Int, {nullable:true})
    completedById!: number | null;

    @Field(() => Date, {nullable:true})
    skippedAt!: Date | null;

    @Field(() => String, {nullable:true})
    skipReason!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => HomeOpsHousehold, {nullable:false})
    household?: HomeOpsHousehold;

    @Field(() => HomeOpsTaskTemplate, {nullable:true})
    template?: HomeOpsTaskTemplate | null;

    @Field(() => HomeOpsWeeklyPlan, {nullable:true})
    weeklyPlan?: HomeOpsWeeklyPlan | null;

    @Field(() => User, {nullable:true})
    assignee?: User | null;

    @Field(() => User, {nullable:true})
    completedBy?: User | null;
}
