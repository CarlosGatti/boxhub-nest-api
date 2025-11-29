import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DiscartItemUpdateOneRequiredWithoutCommentsNestedInput } from '../discart-item/discart-item-update-one-required-without-comments-nested.input';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';
import { CommentUpdateManyWithoutParentNestedInput } from './comment-update-many-without-parent-nested.input';

@InputType()
export class CommentUpdateWithoutParentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DiscartItemUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    discartItem?: DiscartItemUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => CommentUpdateManyWithoutParentNestedInput, {nullable:true})
    replies?: CommentUpdateManyWithoutParentNestedInput;
}
