import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BucketGoalMediaCountAggregate } from './bucket-goal-media-count-aggregate.output';
import { BucketGoalMediaAvgAggregate } from './bucket-goal-media-avg-aggregate.output';
import { BucketGoalMediaSumAggregate } from './bucket-goal-media-sum-aggregate.output';
import { BucketGoalMediaMinAggregate } from './bucket-goal-media-min-aggregate.output';
import { BucketGoalMediaMaxAggregate } from './bucket-goal-media-max-aggregate.output';

@ObjectType()
export class AggregateBucketGoalMedia {

    @Field(() => BucketGoalMediaCountAggregate, {nullable:true})
    _count?: BucketGoalMediaCountAggregate;

    @Field(() => BucketGoalMediaAvgAggregate, {nullable:true})
    _avg?: BucketGoalMediaAvgAggregate;

    @Field(() => BucketGoalMediaSumAggregate, {nullable:true})
    _sum?: BucketGoalMediaSumAggregate;

    @Field(() => BucketGoalMediaMinAggregate, {nullable:true})
    _min?: BucketGoalMediaMinAggregate;

    @Field(() => BucketGoalMediaMaxAggregate, {nullable:true})
    _max?: BucketGoalMediaMaxAggregate;
}
