import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumDefinedClientTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-client-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedProjectUncheckedUpdateManyWithoutClientNestedInput } from '../defined-project/defined-project-unchecked-update-many-without-client-nested.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceUncheckedUpdateManyWithoutClientNestedInput } from '../defined-invoice/defined-invoice-unchecked-update-many-without-client-nested.input';
import { DefinedProposalUncheckedUpdateManyWithoutClientNestedInput } from '../defined-proposal/defined-proposal-unchecked-update-many-without-client-nested.input';
import { DefinedBrandingProjectUncheckedUpdateManyWithoutClientNestedInput } from '../defined-branding-project/defined-branding-project-unchecked-update-many-without-client-nested.input';
import { DefinedInternalNoteUncheckedUpdateManyWithoutClientNestedInput } from '../defined-internal-note/defined-internal-note-unchecked-update-many-without-client-nested.input';
import { DefinedIntakeFormUncheckedUpdateManyWithoutClientNestedInput } from '../defined-intake-form/defined-intake-form-unchecked-update-many-without-client-nested.input';

@InputType()
export class DefinedClientUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => EnumDefinedClientTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDefinedClientTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    companyName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    legalName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    contactName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    instagram?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebook?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressLine1?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    addressLine2?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    city?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    state?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    country?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    businessType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    serviceArea?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    yearsInBusiness?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedProjectUncheckedUpdateManyWithoutClientNestedInput, {nullable:true})
    @Type(() => DefinedProjectUncheckedUpdateManyWithoutClientNestedInput)
    projects?: DefinedProjectUncheckedUpdateManyWithoutClientNestedInput;

    @Field(() => DefinedInvoiceUncheckedUpdateManyWithoutClientNestedInput, {nullable:true})
    @Type(() => DefinedInvoiceUncheckedUpdateManyWithoutClientNestedInput)
    invoices?: DefinedInvoiceUncheckedUpdateManyWithoutClientNestedInput;

    @Field(() => DefinedProposalUncheckedUpdateManyWithoutClientNestedInput, {nullable:true})
    @Type(() => DefinedProposalUncheckedUpdateManyWithoutClientNestedInput)
    proposals?: DefinedProposalUncheckedUpdateManyWithoutClientNestedInput;

    @Field(() => DefinedBrandingProjectUncheckedUpdateManyWithoutClientNestedInput, {nullable:true})
    brandingProjects?: DefinedBrandingProjectUncheckedUpdateManyWithoutClientNestedInput;

    @Field(() => DefinedInternalNoteUncheckedUpdateManyWithoutClientNestedInput, {nullable:true})
    internalNotes?: DefinedInternalNoteUncheckedUpdateManyWithoutClientNestedInput;

    @Field(() => DefinedIntakeFormUncheckedUpdateManyWithoutClientNestedInput, {nullable:true})
    intakeForms?: DefinedIntakeFormUncheckedUpdateManyWithoutClientNestedInput;
}
