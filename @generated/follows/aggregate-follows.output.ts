import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FollowsCountAggregate } from './follows-count-aggregate.output';
import { FollowsAvgAggregate } from './follows-avg-aggregate.output';
import { FollowsSumAggregate } from './follows-sum-aggregate.output';
import { FollowsMinAggregate } from './follows-min-aggregate.output';
import { FollowsMaxAggregate } from './follows-max-aggregate.output';

@ObjectType()
export class AggregateFollows {

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
