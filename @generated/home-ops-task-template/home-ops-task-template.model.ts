import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsFrequency } from '../prisma/home-ops-frequency.enum';
import { HomeOpsWeekday } from '../prisma/home-ops-weekday.enum';
import { HomeOpsAssignmentMode } from '../prisma/home-ops-assignment-mode.enum';
import { HomeOpsHousehold } from '../home-ops-household/home-ops-household.model';
import { User } from '../user/user.model';
import { HomeOpsTaskTemplateSlot } from '../home-ops-task-template-slot/home-ops-task-template-slot.model';
import { HomeOpsTaskInstance } from '../home-ops-task-instance/home-ops-task-instance.model';
import { HomeOpsTaskTemplateCount } from './home-ops-task-template-count.output';

@ObjectType()
export class HomeOpsTaskTemplate {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

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

    @Field(() => HomeOpsFrequency, {nullable:false})
    frequency!: keyof typeof HomeOpsFrequency;

    @Field(() => Int, {nullable:true})
    occurrences!: number | null;

    @Field(() => Int, {nullable:true})
    interval!: number | null;

    @Field(() => [HomeOpsWeekday], {nullable:true})
    daysOfWeek!: Array<keyof typeof HomeOpsWeekday>;

    @Field(() => Int, {nullable:true})
    dayOfMonth!: number | null;

    @Field(() => String, {nullable:false,defaultValue:'America/Denver'})
    timezone!: string;

    @Field(() => HomeOpsAssignmentMode, {nullable:false,defaultValue:'FIXED'})
    assignmentMode!: keyof typeof HomeOpsAssignmentMode;

    @Field(() => Int, {nullable:true})
    fixedAssigneeId!: number | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => HomeOpsHousehold, {nullable:false})
    household?: HomeOpsHousehold;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => User, {nullable:true})
    fixedAssignee?: User | null;

    @Field(() => [HomeOpsTaskTemplateSlot], {nullable:true})
    slots?: Array<HomeOpsTaskTemplateSlot>;

    @Field(() => [HomeOpsTaskInstance], {nullable:true})
    taskInstances?: Array<HomeOpsTaskInstance>;

    @Field(() => HomeOpsTaskTemplateCount, {nullable:false})
    _count?: HomeOpsTaskTemplateCount;
}
