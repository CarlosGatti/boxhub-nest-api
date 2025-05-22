import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStorageMembershipsInput } from './user-create-without-storage-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutStorageMembershipsInput } from './user-create-or-connect-without-storage-memberships.input';
import { UserUpsertWithoutStorageMembershipsInput } from './user-upsert-without-storage-memberships.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutStorageMembershipsInput } from './user-update-to-one-with-where-without-storage-memberships.input';

@InputType()
export class UserUpdateOneRequiredWithoutStorageMembershipsNestedInput {

    @Field(() => UserCreateWithoutStorageMembershipsInput, {nullable:true})
    @Type(() => UserCreateWithoutStorageMembershipsInput)
    create?: UserCreateWithoutStorageMembershipsInput;

    @Field(() => UserCreateOrConnectWithoutStorageMembershipsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutStorageMembershipsInput)
    connectOrCreate?: UserCreateOrConnectWithoutStorageMembershipsInput;

    @Field(() => UserUpsertWithoutStorageMembershipsInput, {nullable:true})
    @Type(() => UserUpsertWithoutStorageMembershipsInput)
    upsert?: UserUpsertWithoutStorageMembershipsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutStorageMembershipsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutStorageMembershipsInput)
    update?: UserUpdateToOneWithWhereWithoutStorageMembershipsInput;
}
