import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumFeedEventActionFieldUpdateOperationsInput } from '../prisma/enum-feed-event-action-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class FeedEventUpdateManyMutationInput {

    @Field(() => EnumFeedEventActionFieldUpdateOperationsInput, {nullable:true})
    action?: EnumFeedEventActionFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
