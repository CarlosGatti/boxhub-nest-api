import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput } from '../construction-log/construction-log-update-one-required-without-comments-nested.input';
import { UserUpdateOneRequiredWithoutLogCommentsNestedInput } from '../user/user-update-one-required-without-log-comments-nested.input';

@InputType()
export class LogCommentUpdateWithoutRepliesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    log?: ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutLogCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLogCommentsNestedInput;
}
