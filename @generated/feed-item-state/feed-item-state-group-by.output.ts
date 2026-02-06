import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedItemReadStatus } from '../prisma/feed-item-read-status.enum';
import { FeedItemSaveStatus } from '../prisma/feed-item-save-status.enum';
import { FeedItemVisibility } from '../prisma/feed-item-visibility.enum';
import { FeedItemLastAction } from '../prisma/feed-item-last-action.enum';
import { FeedItemStateCountAggregate } from './feed-item-state-count-aggregate.output';
import { FeedItemStateAvgAggregate } from './feed-item-state-avg-aggregate.output';
import { FeedItemStateSumAggregate } from './feed-item-state-sum-aggregate.output';
import { FeedItemStateMinAggregate } from './feed-item-state-min-aggregate.output';
import { FeedItemStateMaxAggregate } from './feed-item-state-max-aggregate.output';

@ObjectType()
export class FeedItemStateGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    itemId!: number;

    @Field(() => FeedItemReadStatus, {nullable:false})
    readStatus!: keyof typeof FeedItemReadStatus;

    @Field(() => FeedItemSaveStatus, {nullable:false})
    saveStatus!: keyof typeof FeedItemSaveStatus;

    @Field(() => FeedItemVisibility, {nullable:false})
    visibility!: keyof typeof FeedItemVisibility;

    @Field(() => Date, {nullable:true})
    openedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    skippedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    skipCount!: number;

    @Field(() => Int, {nullable:false})
    actionCount!: number;

    @Field(() => FeedItemLastAction, {nullable:true})
    lastAction?: keyof typeof FeedItemLastAction;

    @Field(() => Date, {nullable:true})
    readAt?: Date | string;

    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    hiddenAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeedItemStateCountAggregate, {nullable:true})
    _count?: FeedItemStateCountAggregate;

    @Field(() => FeedItemStateAvgAggregate, {nullable:true})
    _avg?: FeedItemStateAvgAggregate;

    @Field(() => FeedItemStateSumAggregate, {nullable:true})
    _sum?: FeedItemStateSumAggregate;

    @Field(() => FeedItemStateMinAggregate, {nullable:true})
    _min?: FeedItemStateMinAggregate;

    @Field(() => FeedItemStateMaxAggregate, {nullable:true})
    _max?: FeedItemStateMaxAggregate;
}
