import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBucketSharesInput } from './user-create-without-bucket-shares.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBucketSharesInput } from './user-create-or-connect-without-bucket-shares.input';
import { UserUpsertWithoutBucketSharesInput } from './user-upsert-without-bucket-shares.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBucketSharesInput } from './user-update-to-one-with-where-without-bucket-shares.input';

@InputType()
export class UserUpdateOneRequiredWithoutBucketSharesNestedInput {

    @Field(() => UserCreateWithoutBucketSharesInput, {nullable:true})
    @Type(() => UserCreateWithoutBucketSharesInput)
    create?: UserCreateWithoutBucketSharesInput;

    @Field(() => UserCreateOrConnectWithoutBucketSharesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBucketSharesInput)
    connectOrCreate?: UserCreateOrConnectWithoutBucketSharesInput;

    @Field(() => UserUpsertWithoutBucketSharesInput, {nullable:true})
    @Type(() => UserUpsertWithoutBucketSharesInput)
    upsert?: UserUpsertWithoutBucketSharesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutBucketSharesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutBucketSharesInput)
    update?: UserUpdateToOneWithWhereWithoutBucketSharesInput;
}
