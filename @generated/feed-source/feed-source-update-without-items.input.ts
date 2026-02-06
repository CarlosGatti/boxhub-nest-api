import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumFeedSourceTypeFieldUpdateOperationsInput } from '../prisma/enum-feed-source-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FeedCollectionUpdateOneRequiredWithoutSourcesNestedInput } from '../feed-collection/feed-collection-update-one-required-without-sources-nested.input';
import { FeedEventUpdateManyWithoutSourceNestedInput } from '../feed-event/feed-event-update-many-without-source-nested.input';
import { FeedSourceNudgeUpdateManyWithoutSourceNestedInput } from '../feed-source-nudge/feed-source-nudge-update-many-without-source-nested.input';
import { FeedSourcePreferenceUpdateManyWithoutSourceNestedInput } from '../feed-source-preference/feed-source-preference-update-many-without-source-nested.input';

@InputType()
export class FeedSourceUpdateWithoutItemsInput {

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

    @Field(() => FeedCollectionUpdateOneRequiredWithoutSourcesNestedInput, {nullable:true})
    collection?: FeedCollectionUpdateOneRequiredWithoutSourcesNestedInput;

    @Field(() => FeedEventUpdateManyWithoutSourceNestedInput, {nullable:true})
    events?: FeedEventUpdateManyWithoutSourceNestedInput;

    @Field(() => FeedSourceNudgeUpdateManyWithoutSourceNestedInput, {nullable:true})
    nudges?: FeedSourceNudgeUpdateManyWithoutSourceNestedInput;

    @Field(() => FeedSourcePreferenceUpdateManyWithoutSourceNestedInput, {nullable:true})
    preferences?: FeedSourcePreferenceUpdateManyWithoutSourceNestedInput;
}
