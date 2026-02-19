import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketVisionBoardUpdateOneRequiredWithoutCheckinsNestedInput } from '../bucket-vision-board/bucket-vision-board-update-one-required-without-checkins-nested.input';

@InputType()
export class BucketVisionCheckinUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    kind?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    mood?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    snapshot?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketVisionBoardUpdateOneRequiredWithoutCheckinsNestedInput, {nullable:true})
    board?: BucketVisionBoardUpdateOneRequiredWithoutCheckinsNestedInput;
}
