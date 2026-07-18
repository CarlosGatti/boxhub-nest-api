import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyShortLinkUpdateOneRequiredWithoutEventsNestedInput } from '../defined-academy-short-link/defined-academy-short-link-update-one-required-without-events-nested.input';

@InputType()
export class DefinedAcademyShortLinkEventUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    occurredAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    anonymousSessionHash?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referrer?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userAgentSummary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    campaignMetadata?: any;

    @Field(() => DefinedAcademyShortLinkUpdateOneRequiredWithoutEventsNestedInput, {nullable:true})
    shortLink?: DefinedAcademyShortLinkUpdateOneRequiredWithoutEventsNestedInput;
}
