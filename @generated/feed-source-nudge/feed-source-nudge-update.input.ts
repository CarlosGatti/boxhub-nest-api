import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFeedSourceNudgesNestedInput } from '../user/user-update-one-required-without-feed-source-nudges-nested.input';
import { Type } from 'class-transformer';
import { FeedSourceUpdateOneRequiredWithoutNudgesNestedInput } from '../feed-source/feed-source-update-one-required-without-nudges-nested.input';

@InputType()
export class FeedSourceNudgeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reason?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFeedSourceNudgesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutFeedSourceNudgesNestedInput)
    user?: UserUpdateOneRequiredWithoutFeedSourceNudgesNestedInput;

    @Field(() => FeedSourceUpdateOneRequiredWithoutNudgesNestedInput, {nullable:true})
    source?: FeedSourceUpdateOneRequiredWithoutNudgesNestedInput;
}
