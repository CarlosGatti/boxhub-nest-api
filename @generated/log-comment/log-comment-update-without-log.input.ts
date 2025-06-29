import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutLogCommentsNestedInput } from '../user/user-update-one-required-without-log-comments-nested.input';
import { LogCommentReplyUpdateManyWithoutCommentNestedInput } from '../log-comment-reply/log-comment-reply-update-many-without-comment-nested.input';

@InputType()
export class LogCommentUpdateWithoutLogInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutLogCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLogCommentsNestedInput;

    @Field(() => LogCommentReplyUpdateManyWithoutCommentNestedInput, {nullable:true})
    replies?: LogCommentReplyUpdateManyWithoutCommentNestedInput;
}
