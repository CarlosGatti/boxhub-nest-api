import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PublicationUpdateOneRequiredWithoutCommentsNestedInput } from '../publication/publication-update-one-required-without-comments-nested.input';
import { UserUpdateOneRequiredWithoutAllPublicationCommentsNestedInput } from '../user/user-update-one-required-without-all-publication-comments-nested.input';

@InputType()
export class PublicationCommentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PublicationUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    publication?: PublicationUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutAllPublicationCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAllPublicationCommentsNestedInput;
}
