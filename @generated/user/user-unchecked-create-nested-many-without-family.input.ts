import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFamilyInput } from './user-create-without-family.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFamilyInput } from './user-create-or-connect-without-family.input';
import { UserCreateManyFamilyInputEnvelope } from './user-create-many-family-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutFamilyInput {

    @Field(() => [UserCreateWithoutFamilyInput], {nullable:true})
    @Type(() => UserCreateWithoutFamilyInput)
    create?: Array<UserCreateWithoutFamilyInput>;

    @Field(() => [UserCreateOrConnectWithoutFamilyInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFamilyInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutFamilyInput>;

    @Field(() => UserCreateManyFamilyInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyFamilyInputEnvelope)
    createMany?: UserCreateManyFamilyInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
