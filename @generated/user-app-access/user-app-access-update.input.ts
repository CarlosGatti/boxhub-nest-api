import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAppsNestedInput } from '../user/user-update-one-required-without-apps-nested.input';
import { Type } from 'class-transformer';
import { AppUpdateOneRequiredWithoutUsersNestedInput } from '../app/app-update-one-required-without-users-nested.input';

@InputType()
export class UserAppAccessUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAppsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutAppsNestedInput)
    user?: UserUpdateOneRequiredWithoutAppsNestedInput;

    @Field(() => AppUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    app?: AppUpdateOneRequiredWithoutUsersNestedInput;
}
