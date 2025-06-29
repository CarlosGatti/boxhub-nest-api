import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReceivedMaterialsInput } from './user-create-without-received-materials.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReceivedMaterialsInput } from './user-create-or-connect-without-received-materials.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReceivedMaterialsInput {

    @Field(() => UserCreateWithoutReceivedMaterialsInput, {nullable:true})
    @Type(() => UserCreateWithoutReceivedMaterialsInput)
    create?: UserCreateWithoutReceivedMaterialsInput;

    @Field(() => UserCreateOrConnectWithoutReceivedMaterialsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReceivedMaterialsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMaterialsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
