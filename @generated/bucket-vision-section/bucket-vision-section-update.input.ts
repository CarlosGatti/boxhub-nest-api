import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumBucketVisionSectionTypeFieldUpdateOperationsInput } from '../prisma/enum-bucket-vision-section-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketVisionBoardUpdateOneRequiredWithoutSectionsNestedInput } from '../bucket-vision-board/bucket-vision-board-update-one-required-without-sections-nested.input';

@InputType()
export class BucketVisionSectionUpdateInput {

    @Field(() => EnumBucketVisionSectionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumBucketVisionSectionTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketVisionBoardUpdateOneRequiredWithoutSectionsNestedInput, {nullable:true})
    board?: BucketVisionBoardUpdateOneRequiredWithoutSectionsNestedInput;
}
