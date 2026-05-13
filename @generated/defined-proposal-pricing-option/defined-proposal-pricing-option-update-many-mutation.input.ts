import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedProposalPricingTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-proposal-pricing-type-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionUpdatefeaturesInput } from './defined-proposal-pricing-option-updatefeatures.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class DefinedProposalPricingOptionUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedProposalPricingTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDefinedProposalPricingTypeFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    amount?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    billingNote?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DefinedProposalPricingOptionUpdatefeaturesInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionUpdatefeaturesInput)
    features?: DefinedProposalPricingOptionUpdatefeaturesInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRecommended?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
