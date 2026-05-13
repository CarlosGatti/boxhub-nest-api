import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedProposalStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-proposal-status-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedProposalSectionUncheckedUpdateManyWithoutProposalNestedInput } from '../defined-proposal-section/defined-proposal-section-unchecked-update-many-without-proposal-nested.input';
import { DefinedProposalPricingOptionUncheckedUpdateManyWithoutProposalNestedInput } from '../defined-proposal-pricing-option/defined-proposal-pricing-option-unchecked-update-many-without-proposal-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalUncheckedUpdateWithoutClientInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    projectId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subtitle?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedProposalStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedProposalStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    summary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shareToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    shareTokenCreatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    shareTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    shareRevokedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    sentAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    viewedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    createdById?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedProposalSectionUncheckedUpdateManyWithoutProposalNestedInput, {nullable:true})
    sections?: DefinedProposalSectionUncheckedUpdateManyWithoutProposalNestedInput;

    @Field(() => DefinedProposalPricingOptionUncheckedUpdateManyWithoutProposalNestedInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionUncheckedUpdateManyWithoutProposalNestedInput)
    pricingOptions?: DefinedProposalPricingOptionUncheckedUpdateManyWithoutProposalNestedInput;
}
