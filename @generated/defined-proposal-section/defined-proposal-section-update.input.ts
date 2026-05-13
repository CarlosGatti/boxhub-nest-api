import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumDefinedProposalSectionTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-proposal-section-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedProposalUpdateOneRequiredWithoutSectionsNestedInput } from '../defined-proposal/defined-proposal-update-one-required-without-sections-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalSectionUpdateInput {

    @Field(() => EnumDefinedProposalSectionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDefinedProposalSectionTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    body?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedProposalUpdateOneRequiredWithoutSectionsNestedInput, {nullable:true})
    @Type(() => DefinedProposalUpdateOneRequiredWithoutSectionsNestedInput)
    proposal?: DefinedProposalUpdateOneRequiredWithoutSectionsNestedInput;
}
