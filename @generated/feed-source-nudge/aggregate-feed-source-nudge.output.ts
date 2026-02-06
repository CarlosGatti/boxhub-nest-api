import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedSourceNudgeCountAggregate } from './feed-source-nudge-count-aggregate.output';
import { FeedSourceNudgeAvgAggregate } from './feed-source-nudge-avg-aggregate.output';
import { FeedSourceNudgeSumAggregate } from './feed-source-nudge-sum-aggregate.output';
import { FeedSourceNudgeMinAggregate } from './feed-source-nudge-min-aggregate.output';
import { FeedSourceNudgeMaxAggregate } from './feed-source-nudge-max-aggregate.output';

@ObjectType()
export class AggregateFeedSourceNudge {

    @Field(() => FeedSourceNudgeCountAggregate, {nullable:true})
    _count?: FeedSourceNudgeCountAggregate;

    @Field(() => FeedSourceNudgeAvgAggregate, {nullable:true})
    _avg?: FeedSourceNudgeAvgAggregate;

    @Field(() => FeedSourceNudgeSumAggregate, {nullable:true})
    _sum?: FeedSourceNudgeSumAggregate;

    @Field(() => FeedSourceNudgeMinAggregate, {nullable:true})
    _min?: FeedSourceNudgeMinAggregate;

    @Field(() => FeedSourceNudgeMaxAggregate, {nullable:true})
    _max?: FeedSourceNudgeMaxAggregate;
}
