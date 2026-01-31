import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumFeedItemTypeFieldUpdateOperationsInput } from '../prisma/enum-feed-item-type-field-update-operations.input';
import { EnumFeedItemStatusFieldUpdateOperationsInput } from '../prisma/enum-feed-item-status-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FeedItemStateUpdateManyWithoutItemNestedInput } from '../feed-item-state/feed-item-state-update-many-without-item-nested.input';
import { FeedItemSummaryUpdateOneWithoutItemNestedInput } from '../feed-item-summary/feed-item-summary-update-one-without-item-nested.input';

@InputType()
export class FeedItemUpdateWithoutSourceInput {

    @Field(() => EnumFeedItemTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumFeedItemTypeFieldUpdateOperationsInput;

    @Field(() => EnumFeedItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumFeedItemStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    canonicalUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    contentText?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metrics?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    contentHash?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FeedItemStateUpdateManyWithoutItemNestedInput, {nullable:true})
    states?: FeedItemStateUpdateManyWithoutItemNestedInput;

    @Field(() => FeedItemSummaryUpdateOneWithoutItemNestedInput, {nullable:true})
    summary?: FeedItemSummaryUpdateOneWithoutItemNestedInput;
}
