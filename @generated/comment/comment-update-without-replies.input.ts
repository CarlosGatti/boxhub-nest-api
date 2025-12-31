import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DiscartItemUpdateOneRequiredWithoutCommentsNestedInput } from '../discart-item/discart-item-update-one-required-without-comments-nested.input';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';
import { Type } from 'class-transformer';
import { CommentUpdateOneWithoutRepliesNestedInput } from './comment-update-one-without-replies-nested.input';

@InputType()
export class CommentUpdateWithoutRepliesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DiscartItemUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    discartItem?: DiscartItemUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutCommentsNestedInput)
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => CommentUpdateOneWithoutRepliesNestedInput, {nullable:true})
    parent?: CommentUpdateOneWithoutRepliesNestedInput;
}
