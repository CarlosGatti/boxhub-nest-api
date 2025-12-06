import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAppsNestedInput } from '../user/user-update-one-required-without-apps-nested.input';

@InputType()
export class UserAppAccessUpdateWithoutAppInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAppsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAppsNestedInput;
}
