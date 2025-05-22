import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStorageMembershipsInput } from './user-create-without-storage-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutStorageMembershipsInput } from './user-create-or-connect-without-storage-memberships.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutStorageMembershipsInput {

    @Field(() => UserCreateWithoutStorageMembershipsInput, {nullable:true})
    @Type(() => UserCreateWithoutStorageMembershipsInput)
    create?: UserCreateWithoutStorageMembershipsInput;

    @Field(() => UserCreateOrConnectWithoutStorageMembershipsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutStorageMembershipsInput)
    connectOrCreate?: UserCreateOrConnectWithoutStorageMembershipsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
