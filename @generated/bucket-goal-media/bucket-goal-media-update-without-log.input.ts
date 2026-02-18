import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumBucketMediaTypeFieldUpdateOperationsInput } from '../prisma/enum-bucket-media-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketGoalUpdateOneWithoutMediaNestedInput } from '../bucket-goal/bucket-goal-update-one-without-media-nested.input';

@InputType()
export class BucketGoalMediaUpdateWithoutLogInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => EnumBucketMediaTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumBucketMediaTypeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketGoalUpdateOneWithoutMediaNestedInput, {nullable:true})
    goal?: BucketGoalUpdateOneWithoutMediaNestedInput;
}
