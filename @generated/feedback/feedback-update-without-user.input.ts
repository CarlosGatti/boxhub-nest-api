import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FeedbackUpdatetagsInput } from './feedback-updatetags.input';
import { GraphQLJSON } from 'graphql-type-json';
import { EnumFeedbackStatusFieldUpdateOperationsInput } from '../prisma/enum-feedback-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AppUpdateOneRequiredWithoutFeedbacksNestedInput } from '../app/app-update-one-required-without-feedbacks-nested.input';

@InputType()
export class FeedbackUpdateWithoutUserInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    anonymousId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    contactEmail?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    rating?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => FeedbackUpdatetagsInput, {nullable:true})
    tags?: FeedbackUpdatetagsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    contextPath?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => EnumFeedbackStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumFeedbackStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AppUpdateOneRequiredWithoutFeedbacksNestedInput, {nullable:true})
    targetApp?: AppUpdateOneRequiredWithoutFeedbacksNestedInput;
}
