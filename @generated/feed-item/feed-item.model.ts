import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedItemType } from '../prisma/feed-item-type.enum';
import { FeedItemStatus } from '../prisma/feed-item-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedSource } from '../feed-source/feed-source.model';
import { FeedItemState } from '../feed-item-state/feed-item-state.model';
import { FeedItemSummary } from '../feed-item-summary/feed-item-summary.model';
import { FeedEvent } from '../feed-event/feed-event.model';
import { FeedItemCount } from './feed-item-count.output';

@ObjectType()
export class FeedItem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => FeedItemType, {nullable:false,defaultValue:'ARTICLE'})
    type!: keyof typeof FeedItemType;

    @Field(() => FeedItemStatus, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof FeedItemStatus;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    canonicalUrl!: string | null;

    @Field(() => Date, {nullable:true})
    publishedAt!: Date | null;

    @Field(() => String, {nullable:true})
    contentText!: string | null;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metrics!: any | null;

    @Field(() => String, {nullable:false})
    contentHash!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => FeedSource, {nullable:false})
    source?: FeedSource;

    @Field(() => [FeedItemState], {nullable:true})
    states?: Array<FeedItemState>;

    @Field(() => FeedItemSummary, {nullable:true})
    summary?: FeedItemSummary | null;

    @Field(() => [FeedEvent], {nullable:true})
    events?: Array<FeedEvent>;

    @Field(() => FeedItemCount, {nullable:false})
    _count?: FeedItemCount;
}
