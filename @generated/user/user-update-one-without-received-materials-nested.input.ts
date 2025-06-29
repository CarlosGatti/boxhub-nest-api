import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReceivedMaterialsInput } from './user-create-without-received-materials.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReceivedMaterialsInput } from './user-create-or-connect-without-received-materials.input';
import { UserUpsertWithoutReceivedMaterialsInput } from './user-upsert-without-received-materials.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReceivedMaterialsInput } from './user-update-to-one-with-where-without-received-materials.input';

@InputType()
export class UserUpdateOneWithoutReceivedMaterialsNestedInput {

    @Field(() => UserCreateWithoutReceivedMaterialsInput, {nullable:true})
    @Type(() => UserCreateWithoutReceivedMaterialsInput)
    create?: UserCreateWithoutReceivedMaterialsInput;

    @Field(() => UserCreateOrConnectWithoutReceivedMaterialsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReceivedMaterialsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMaterialsInput;

    @Field(() => UserUpsertWithoutReceivedMaterialsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReceivedMaterialsInput)
    upsert?: UserUpsertWithoutReceivedMaterialsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReceivedMaterialsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReceivedMaterialsInput)
    update?: UserUpdateToOneWithWhereWithoutReceivedMaterialsInput;
}
