import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAllPublicationLikesNestedInput } from '../user/user-update-one-required-without-all-publication-likes-nested.input';

@InputType()
export class PublicationLikeUpdateWithoutPublicationInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAllPublicationLikesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAllPublicationLikesNestedInput;
}
