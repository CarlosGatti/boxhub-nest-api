import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserAppAccessUpdateManyWithoutAppNestedInput } from '../user-app-access/user-app-access-update-many-without-app-nested.input';
import { HomeOpsHouseholdUpdateManyWithoutAppNestedInput } from '../home-ops-household/home-ops-household-update-many-without-app-nested.input';

@InputType()
export class AppUpdateWithoutFeedbacksInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserAppAccessUpdateManyWithoutAppNestedInput, {nullable:true})
    users?: UserAppAccessUpdateManyWithoutAppNestedInput;

    @Field(() => HomeOpsHouseholdUpdateManyWithoutAppNestedInput, {nullable:true})
    homeOpsHouseholds?: HomeOpsHouseholdUpdateManyWithoutAppNestedInput;
}
