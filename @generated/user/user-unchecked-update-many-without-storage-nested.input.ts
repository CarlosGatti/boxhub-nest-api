import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStorageInput } from './user-create-without-storage.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutStorageInput } from './user-create-or-connect-without-storage.input';
import { UserUpsertWithWhereUniqueWithoutStorageInput } from './user-upsert-with-where-unique-without-storage.input';
import { UserCreateManyStorageInputEnvelope } from './user-create-many-storage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutStorageInput } from './user-update-with-where-unique-without-storage.input';
import { UserUpdateManyWithWhereWithoutStorageInput } from './user-update-many-with-where-without-storage.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutStorageNestedInput {

    @Field(() => [UserCreateWithoutStorageInput], {nullable:true})
    @Type(() => UserCreateWithoutStorageInput)
    create?: Array<UserCreateWithoutStorageInput>;

    @Field(() => [UserCreateOrConnectWithoutStorageInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutStorageInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutStorageInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutStorageInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutStorageInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutStorageInput>;

    @Field(() => UserCreateManyStorageInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyStorageInputEnvelope)
    createMany?: UserCreateManyStorageInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutStorageInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutStorageInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutStorageInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutStorageInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutStorageInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutStorageInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
