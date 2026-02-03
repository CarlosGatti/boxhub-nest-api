import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsFrequency } from '../prisma/home-ops-frequency.enum';
import { HomeOpsWeekday } from '../prisma/home-ops-weekday.enum';
import { HomeOpsAssignmentMode } from '../prisma/home-ops-assignment-mode.enum';
import { HomeOpsTaskTemplateCountAggregate } from './home-ops-task-template-count-aggregate.output';
import { HomeOpsTaskTemplateAvgAggregate } from './home-ops-task-template-avg-aggregate.output';
import { HomeOpsTaskTemplateSumAggregate } from './home-ops-task-template-sum-aggregate.output';
import { HomeOpsTaskTemplateMinAggregate } from './home-ops-task-template-min-aggregate.output';
import { HomeOpsTaskTemplateMaxAggregate } from './home-ops-task-template-max-aggregate.output';

@ObjectType()
export class HomeOpsTaskTemplateGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => Int, {nullable:false})
    effortWeight!: number;

    @Field(() => Int, {nullable:true})
    estimatedMinutes?: number;

    @Field(() => HomeOpsFrequency, {nullable:false})
    frequency!: keyof typeof HomeOpsFrequency;

    @Field(() => Int, {nullable:true})
    occurrences?: number;

    @Field(() => Int, {nullable:true})
    interval?: number;

    @Field(() => [HomeOpsWeekday], {nullable:true})
    daysOfWeek?: Array<keyof typeof HomeOpsWeekday>;

    @Field(() => Int, {nullable:true})
    dayOfMonth?: number;

    @Field(() => String, {nullable:false})
    timezone!: string;

    @Field(() => HomeOpsAssignmentMode, {nullable:false})
    assignmentMode!: keyof typeof HomeOpsAssignmentMode;

    @Field(() => Int, {nullable:true})
    fixedAssigneeId?: number;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HomeOpsTaskTemplateCountAggregate, {nullable:true})
    _count?: HomeOpsTaskTemplateCountAggregate;

    @Field(() => HomeOpsTaskTemplateAvgAggregate, {nullable:true})
    _avg?: HomeOpsTaskTemplateAvgAggregate;

    @Field(() => HomeOpsTaskTemplateSumAggregate, {nullable:true})
    _sum?: HomeOpsTaskTemplateSumAggregate;

    @Field(() => HomeOpsTaskTemplateMinAggregate, {nullable:true})
    _min?: HomeOpsTaskTemplateMinAggregate;

    @Field(() => HomeOpsTaskTemplateMaxAggregate, {nullable:true})
    _max?: HomeOpsTaskTemplateMaxAggregate;
}
