import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemType } from '../prisma/feed-item-type.enum';
import { FeedItemStatus } from '../prisma/feed-item-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedSourceCreateNestedOneWithoutItemsInput } from '../feed-source/feed-source-create-nested-one-without-items.input';
import { FeedItemStateCreateNestedManyWithoutItemInput } from '../feed-item-state/feed-item-state-create-nested-many-without-item.input';
import { FeedItemSummaryCreateNestedOneWithoutItemInput } from '../feed-item-summary/feed-item-summary-create-nested-one-without-item.input';
import { FeedEventCreateNestedManyWithoutItemInput } from '../feed-event/feed-event-create-nested-many-without-item.input';

@InputType()
export class FeedItemCreateInput {

    @Field(() => FeedItemType, {nullable:true})
    type?: keyof typeof FeedItemType;

    @Field(() => FeedItemStatus, {nullable:true})
    status?: keyof typeof FeedItemStatus;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    canonicalUrl?: string;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => String, {nullable:true})
    contentText?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metrics?: any;

    @Field(() => String, {nullable:false})
    contentHash!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedSourceCreateNestedOneWithoutItemsInput, {nullable:false})
    source!: FeedSourceCreateNestedOneWithoutItemsInput;

    @Field(() => FeedItemStateCreateNestedManyWithoutItemInput, {nullable:true})
    states?: FeedItemStateCreateNestedManyWithoutItemInput;

    @Field(() => FeedItemSummaryCreateNestedOneWithoutItemInput, {nullable:true})
    summary?: FeedItemSummaryCreateNestedOneWithoutItemInput;

    @Field(() => FeedEventCreateNestedManyWithoutItemInput, {nullable:true})
    events?: FeedEventCreateNestedManyWithoutItemInput;
}
