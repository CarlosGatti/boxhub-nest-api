import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumBucketShareTypeFieldUpdateOperationsInput } from '../prisma/enum-bucket-share-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutBucketSharesNestedInput } from '../user/user-update-one-required-without-bucket-shares-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketShareUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: StringFieldUpdateOperationsInput;

    @Field(() => EnumBucketShareTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumBucketShareTypeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    payload?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutBucketSharesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutBucketSharesNestedInput)
    user?: UserUpdateOneRequiredWithoutBucketSharesNestedInput;
}
