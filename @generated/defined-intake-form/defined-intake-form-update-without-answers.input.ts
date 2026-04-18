import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumDefinedIntakeFormTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-intake-form-type-field-update-operations.input';
import { EnumDefinedIntakeFormStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-intake-form-status-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedClientUpdateOneRequiredWithoutIntakeFormsNestedInput } from '../defined-client/defined-client-update-one-required-without-intake-forms-nested.input';
import { DefinedProjectUpdateOneWithoutIntakeFormsNestedInput } from '../defined-project/defined-project-update-one-without-intake-forms-nested.input';

@InputType()
export class DefinedIntakeFormUpdateWithoutAnswersInput {

    @Field(() => EnumDefinedIntakeFormTypeFieldUpdateOperationsInput, {nullable:true})
    formType?: EnumDefinedIntakeFormTypeFieldUpdateOperationsInput;

    @Field(() => EnumDefinedIntakeFormStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedIntakeFormStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shareToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    shareTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    shareTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    shareRevokedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedClientUpdateOneRequiredWithoutIntakeFormsNestedInput, {nullable:true})
    client?: DefinedClientUpdateOneRequiredWithoutIntakeFormsNestedInput;

    @Field(() => DefinedProjectUpdateOneWithoutIntakeFormsNestedInput, {nullable:true})
    project?: DefinedProjectUpdateOneWithoutIntakeFormsNestedInput;
}
