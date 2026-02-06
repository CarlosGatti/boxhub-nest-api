import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumFeedEventActionFieldUpdateOperationsInput } from '../prisma/enum-feed-event-action-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFeedEventsNestedInput } from '../user/user-update-one-required-without-feed-events-nested.input';
import { Type } from 'class-transformer';
import { FeedItemUpdateOneRequiredWithoutEventsNestedInput } from '../feed-item/feed-item-update-one-required-without-events-nested.input';
import { FeedSourceUpdateOneRequiredWithoutEventsNestedInput } from '../feed-source/feed-source-update-one-required-without-events-nested.input';

@InputType()
export class FeedEventUpdateInput {

    @Field(() => EnumFeedEventActionFieldUpdateOperationsInput, {nullable:true})
    action?: EnumFeedEventActionFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFeedEventsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutFeedEventsNestedInput)
    user?: UserUpdateOneRequiredWithoutFeedEventsNestedInput;

    @Field(() => FeedItemUpdateOneRequiredWithoutEventsNestedInput, {nullable:true})
    item?: FeedItemUpdateOneRequiredWithoutEventsNestedInput;

    @Field(() => FeedSourceUpdateOneRequiredWithoutEventsNestedInput, {nullable:true})
    source?: FeedSourceUpdateOneRequiredWithoutEventsNestedInput;
}
