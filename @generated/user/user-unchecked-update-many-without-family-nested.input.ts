import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFamilyInput } from './user-create-without-family.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFamilyInput } from './user-create-or-connect-without-family.input';
import { UserUpsertWithWhereUniqueWithoutFamilyInput } from './user-upsert-with-where-unique-without-family.input';
import { UserCreateManyFamilyInputEnvelope } from './user-create-many-family-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFamilyInput } from './user-update-with-where-unique-without-family.input';
import { UserUpdateManyWithWhereWithoutFamilyInput } from './user-update-many-with-where-without-family.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutFamilyNestedInput {

    @Field(() => [UserCreateWithoutFamilyInput], {nullable:true})
    @Type(() => UserCreateWithoutFamilyInput)
    create?: Array<UserCreateWithoutFamilyInput>;

    @Field(() => [UserCreateOrConnectWithoutFamilyInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFamilyInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutFamilyInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFamilyInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutFamilyInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFamilyInput>;

    @Field(() => UserCreateManyFamilyInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyFamilyInputEnvelope)
    createMany?: UserCreateManyFamilyInputEnvelope;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutFamilyInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutFamilyInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutFamilyInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFamilyInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutFamilyInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutFamilyInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
