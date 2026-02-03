import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserAppAccessUncheckedUpdateManyWithoutAppNestedInput } from '../user-app-access/user-app-access-unchecked-update-many-without-app-nested.input';
import { FeedbackUncheckedUpdateManyWithoutTargetAppNestedInput } from '../feedback/feedback-unchecked-update-many-without-target-app-nested.input';

@InputType()
export class AppUncheckedUpdateWithoutHomeOpsHouseholdsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => UserAppAccessUncheckedUpdateManyWithoutAppNestedInput, {nullable:true})
    users?: UserAppAccessUncheckedUpdateManyWithoutAppNestedInput;

    @Field(() => FeedbackUncheckedUpdateManyWithoutTargetAppNestedInput, {nullable:true})
    feedbacks?: FeedbackUncheckedUpdateManyWithoutTargetAppNestedInput;
}
