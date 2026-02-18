import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumBucketPinSourceFieldUpdateOperationsInput } from '../prisma/enum-bucket-pin-source-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketGoalUpdateOneRequiredWithoutPinsNestedInput } from '../bucket-goal/bucket-goal-update-one-required-without-pins-nested.input';

@InputType()
export class BucketGoalPinUpdateInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    lat?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    lng?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    label?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumBucketPinSourceFieldUpdateOperationsInput, {nullable:true})
    source?: EnumBucketPinSourceFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    raw?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketGoalUpdateOneRequiredWithoutPinsNestedInput, {nullable:true})
    goal?: BucketGoalUpdateOneRequiredWithoutPinsNestedInput;
}
