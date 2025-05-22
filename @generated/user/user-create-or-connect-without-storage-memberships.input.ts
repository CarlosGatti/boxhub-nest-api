import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutStorageMembershipsInput } from './user-create-without-storage-memberships.input';

@InputType()
export class UserCreateOrConnectWithoutStorageMembershipsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutStorageMembershipsInput, {nullable:false})
    @Type(() => UserCreateWithoutStorageMembershipsInput)
    create!: UserCreateWithoutStorageMembershipsInput;
}
