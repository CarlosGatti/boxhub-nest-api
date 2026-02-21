import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBucketSharesInput } from './user-create-without-bucket-shares.input';

@InputType()
export class UserCreateOrConnectWithoutBucketSharesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutBucketSharesInput, {nullable:false})
    @Type(() => UserCreateWithoutBucketSharesInput)
    create!: UserCreateWithoutBucketSharesInput;
}
