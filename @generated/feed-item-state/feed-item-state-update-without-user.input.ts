import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumFeedItemReadStatusFieldUpdateOperationsInput } from '../prisma/enum-feed-item-read-status-field-update-operations.input';
import { EnumFeedItemSaveStatusFieldUpdateOperationsInput } from '../prisma/enum-feed-item-save-status-field-update-operations.input';
import { EnumFeedItemVisibilityFieldUpdateOperationsInput } from '../prisma/enum-feed-item-visibility-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FeedItemUpdateOneRequiredWithoutStatesNestedInput } from '../feed-item/feed-item-update-one-required-without-states-nested.input';

@InputType()
export class FeedItemStateUpdateWithoutUserInput {

    @Field(() => EnumFeedItemReadStatusFieldUpdateOperationsInput, {nullable:true})
    readStatus?: EnumFeedItemReadStatusFieldUpdateOperationsInput;

    @Field(() => EnumFeedItemSaveStatusFieldUpdateOperationsInput, {nullable:true})
    saveStatus?: EnumFeedItemSaveStatusFieldUpdateOperationsInput;

    @Field(() => EnumFeedItemVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumFeedItemVisibilityFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    readAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    hiddenAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FeedItemUpdateOneRequiredWithoutStatesNestedInput, {nullable:true})
    item?: FeedItemUpdateOneRequiredWithoutStatesNestedInput;
}
