import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecurringCashflowCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    source!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    frequency!: number;

    @Field(() => Int, {nullable:false})
    startDate!: number;

    @Field(() => Int, {nullable:false})
    endDate!: number;

    @Field(() => Int, {nullable:false})
    nextDueDate!: number;

    @Field(() => Int, {nullable:false})
    notes!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
