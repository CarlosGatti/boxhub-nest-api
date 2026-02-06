import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumFeedSourceTypeFieldUpdateOperationsInput } from '../prisma/enum-feed-source-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FeedItemUncheckedUpdateManyWithoutSourceNestedInput } from '../feed-item/feed-item-unchecked-update-many-without-source-nested.input';
import { FeedSourceNudgeUncheckedUpdateManyWithoutSourceNestedInput } from '../feed-source-nudge/feed-source-nudge-unchecked-update-many-without-source-nested.input';
import { FeedSourcePreferenceUncheckedUpdateManyWithoutSourceNestedInput } from '../feed-source-preference/feed-source-preference-unchecked-update-many-without-source-nested.input';

@InputType()
export class FeedSourceUncheckedUpdateWithoutEventsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    collectionId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumFeedSourceTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumFeedSourceTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    includeShorts?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fetchEveryMin?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    lastFetchedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    failureCount?: IntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FeedItemUncheckedUpdateManyWithoutSourceNestedInput, {nullable:true})
    items?: FeedItemUncheckedUpdateManyWithoutSourceNestedInput;

    @Field(() => FeedSourceNudgeUncheckedUpdateManyWithoutSourceNestedInput, {nullable:true})
    nudges?: FeedSourceNudgeUncheckedUpdateManyWithoutSourceNestedInput;

    @Field(() => FeedSourcePreferenceUncheckedUpdateManyWithoutSourceNestedInput, {nullable:true})
    preferences?: FeedSourcePreferenceUncheckedUpdateManyWithoutSourceNestedInput;
}
