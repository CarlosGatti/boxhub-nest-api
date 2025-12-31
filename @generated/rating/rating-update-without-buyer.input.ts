import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRatingsAsSellerNestedInput } from '../user/user-update-one-required-without-ratings-as-seller-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class RatingUpdateWithoutBuyerInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stars?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    comment?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRatingsAsSellerNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutRatingsAsSellerNestedInput)
    seller?: UserUpdateOneRequiredWithoutRatingsAsSellerNestedInput;
}
