import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedProposalStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-proposal-status-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedClientUpdateOneRequiredWithoutProposalsNestedInput } from '../defined-client/defined-client-update-one-required-without-proposals-nested.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateOneWithoutProposalsNestedInput } from '../defined-project/defined-project-update-one-without-proposals-nested.input';
import { UserUpdateOneWithoutDefinedProposalsCreatedNestedInput } from '../user/user-update-one-without-defined-proposals-created-nested.input';
import { DefinedProposalSectionUpdateManyWithoutProposalNestedInput } from '../defined-proposal-section/defined-proposal-section-update-many-without-proposal-nested.input';
import { DefinedProposalPricingOptionUpdateManyWithoutProposalNestedInput } from '../defined-proposal-pricing-option/defined-proposal-pricing-option-update-many-without-proposal-nested.input';

@InputType()
export class DefinedProposalUpdateInput {

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedClientUpdateOneRequiredWithoutProposalsNestedInput, {nullable:true})
    @Type(() => DefinedClientUpdateOneRequiredWithoutProposalsNestedInput)
    client?: DefinedClientUpdateOneRequiredWithoutProposalsNestedInput;

    @Field(() => DefinedProjectUpdateOneWithoutProposalsNestedInput, {nullable:true})
    @Type(() => DefinedProjectUpdateOneWithoutProposalsNestedInput)
    project?: DefinedProjectUpdateOneWithoutProposalsNestedInput;

    @Field(() => UserUpdateOneWithoutDefinedProposalsCreatedNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutDefinedProposalsCreatedNestedInput)
    createdBy?: UserUpdateOneWithoutDefinedProposalsCreatedNestedInput;

    @Field(() => DefinedProposalSectionUpdateManyWithoutProposalNestedInput, {nullable:true})
    sections?: DefinedProposalSectionUpdateManyWithoutProposalNestedInput;

    @Field(() => DefinedProposalPricingOptionUpdateManyWithoutProposalNestedInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionUpdateManyWithoutProposalNestedInput)
    pricingOptions?: DefinedProposalPricingOptionUpdateManyWithoutProposalNestedInput;
}
