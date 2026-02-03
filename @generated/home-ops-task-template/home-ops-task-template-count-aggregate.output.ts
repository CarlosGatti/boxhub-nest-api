import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsTaskTemplateCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => Int, {nullable:false})
    effortWeight!: number;

    @Field(() => Int, {nullable:false})
    estimatedMinutes!: number;

    @Field(() => Int, {nullable:false})
    frequency!: number;

    @Field(() => Int, {nullable:false})
    occurrences!: number;

    @Field(() => Int, {nullable:false})
    interval!: number;

    @Field(() => Int, {nullable:false})
    daysOfWeek!: number;

    @Field(() => Int, {nullable:false})
    dayOfMonth!: number;

    @Field(() => Int, {nullable:false})
    timezone!: number;

    @Field(() => Int, {nullable:false})
    assignmentMode!: number;

    @Field(() => Int, {nullable:false})
    fixedAssigneeId!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
