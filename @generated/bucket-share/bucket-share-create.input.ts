import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareType } from '../prisma/bucket-share-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutBucketSharesInput } from '../user/user-create-nested-one-without-bucket-shares.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketShareCreateInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => BucketShareType, {nullable:false})
    type!: keyof typeof BucketShareType;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBucketSharesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutBucketSharesInput)
    user!: UserCreateNestedOneWithoutBucketSharesInput;
}
