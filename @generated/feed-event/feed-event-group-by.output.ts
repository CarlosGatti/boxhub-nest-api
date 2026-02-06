import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedEventAction } from '../prisma/feed-event-action.enum';
import { FeedEventCountAggregate } from './feed-event-count-aggregate.output';
import { FeedEventAvgAggregate } from './feed-event-avg-aggregate.output';
import { FeedEventSumAggregate } from './feed-event-sum-aggregate.output';
import { FeedEventMinAggregate } from './feed-event-min-aggregate.output';
import { FeedEventMaxAggregate } from './feed-event-max-aggregate.output';

@ObjectType()
export class FeedEventGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    itemId!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => FeedEventAction, {nullable:false})
    action!: keyof typeof FeedEventAction;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => FeedEventCountAggregate, {nullable:true})
    _count?: FeedEventCountAggregate;

    @Field(() => FeedEventAvgAggregate, {nullable:true})
    _avg?: FeedEventAvgAggregate;

    @Field(() => FeedEventSumAggregate, {nullable:true})
    _sum?: FeedEventSumAggregate;

    @Field(() => FeedEventMinAggregate, {nullable:true})
    _min?: FeedEventMinAggregate;

    @Field(() => FeedEventMaxAggregate, {nullable:true})
    _max?: FeedEventMaxAggregate;
}
