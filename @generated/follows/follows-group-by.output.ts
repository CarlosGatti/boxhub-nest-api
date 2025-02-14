import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FollowsCountAggregate } from './follows-count-aggregate.output';
import { FollowsAvgAggregate } from './follows-avg-aggregate.output';
import { FollowsSumAggregate } from './follows-sum-aggregate.output';
import { FollowsMinAggregate } from './follows-min-aggregate.output';
import { FollowsMaxAggregate } from './follows-max-aggregate.output';

@ObjectType()
export class FollowsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    followerId!: number;

    @Field(() => Int, {nullable:false})
    followingId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FollowsCountAggregate, {nullable:true})
    _count?: FollowsCountAggregate;

    @Field(() => FollowsAvgAggregate, {nullable:true})
    _avg?: FollowsAvgAggregate;

    @Field(() => FollowsSumAggregate, {nullable:true})
    _sum?: FollowsSumAggregate;

    @Field(() => FollowsMinAggregate, {nullable:true})
    _min?: FollowsMinAggregate;

    @Field(() => FollowsMaxAggregate, {nullable:true})
    _max?: FollowsMaxAggregate;
}
