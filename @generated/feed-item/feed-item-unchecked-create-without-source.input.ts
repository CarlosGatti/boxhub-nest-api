import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedItemType } from '../prisma/feed-item-type.enum';
import { FeedItemStatus } from '../prisma/feed-item-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedItemStateUncheckedCreateNestedManyWithoutItemInput } from '../feed-item-state/feed-item-state-unchecked-create-nested-many-without-item.input';
import { FeedItemSummaryUncheckedCreateNestedOneWithoutItemInput } from '../feed-item-summary/feed-item-summary-unchecked-create-nested-one-without-item.input';

@InputType()
export class FeedItemUncheckedCreateWithoutSourceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => FeedItemStateUncheckedCreateNestedManyWithoutItemInput, {nullable:true})
    states?: FeedItemStateUncheckedCreateNestedManyWithoutItemInput;

    @Field(() => FeedItemSummaryUncheckedCreateNestedOneWithoutItemInput, {nullable:true})
    summary?: FeedItemSummaryUncheckedCreateNestedOneWithoutItemInput;
}
