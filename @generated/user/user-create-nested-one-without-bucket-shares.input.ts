import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBucketSharesInput } from './user-create-without-bucket-shares.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBucketSharesInput } from './user-create-or-connect-without-bucket-shares.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBucketSharesInput {

    @Field(() => UserCreateWithoutBucketSharesInput, {nullable:true})
    @Type(() => UserCreateWithoutBucketSharesInput)
    create?: UserCreateWithoutBucketSharesInput;

    @Field(() => UserCreateOrConnectWithoutBucketSharesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBucketSharesInput)
    connectOrCreate?: UserCreateOrConnectWithoutBucketSharesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
