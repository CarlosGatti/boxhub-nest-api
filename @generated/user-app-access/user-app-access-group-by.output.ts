import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserAppAccessCountAggregate } from './user-app-access-count-aggregate.output';
import { UserAppAccessAvgAggregate } from './user-app-access-avg-aggregate.output';
import { UserAppAccessSumAggregate } from './user-app-access-sum-aggregate.output';
import { UserAppAccessMinAggregate } from './user-app-access-min-aggregate.output';
import { UserAppAccessMaxAggregate } from './user-app-access-max-aggregate.output';

@ObjectType()
export class UserAppAccessGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    appId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserAppAccessCountAggregate, {nullable:true})
    _count?: UserAppAccessCountAggregate;

    @Field(() => UserAppAccessAvgAggregate, {nullable:true})
    _avg?: UserAppAccessAvgAggregate;

    @Field(() => UserAppAccessSumAggregate, {nullable:true})
    _sum?: UserAppAccessSumAggregate;

    @Field(() => UserAppAccessMinAggregate, {nullable:true})
    _min?: UserAppAccessMinAggregate;

    @Field(() => UserAppAccessMaxAggregate, {nullable:true})
    _max?: UserAppAccessMaxAggregate;
}
