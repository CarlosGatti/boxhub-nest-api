import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LogCommentUpdateOneRequiredWithoutRepliesNestedInput } from '../log-comment/log-comment-update-one-required-without-replies-nested.input';
import { UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput } from '../user/user-update-one-required-without-log-comment-replies-nested.input';

@InputType()
export class LogCommentReplyUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LogCommentUpdateOneRequiredWithoutRepliesNestedInput, {nullable:true})
    comment?: LogCommentUpdateOneRequiredWithoutRepliesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput;
}
