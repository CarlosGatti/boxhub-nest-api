import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    storageMemberships?: number;

    @Field(() => Int, {nullable:false})
    logs?: number;

    @Field(() => Int, {nullable:false})
    discartItems?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    ratingsAsSeller?: number;

    @Field(() => Int, {nullable:false})
    ratingsAsBuyer?: number;

    @Field(() => Int, {nullable:false})
    apps?: number;

    @Field(() => Int, {nullable:false})
    feedbacks?: number;

    @Field(() => Int, {nullable:false})
    feedItemStates?: number;

    @Field(() => Int, {nullable:false})
    portfolios?: number;

    @Field(() => Int, {nullable:false})
    cashflowCategories?: number;

    @Field(() => Int, {nullable:false})
    cashflowEntries?: number;

    @Field(() => Int, {nullable:false})
    recurringCashflows?: number;
}
