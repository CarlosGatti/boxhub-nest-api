import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPublicationsInput } from './user-create-without-publications.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPublicationsInput } from './user-create-or-connect-without-publications.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPublicationsInput {

    @Field(() => UserCreateWithoutPublicationsInput, {nullable:true})
    @Type(() => UserCreateWithoutPublicationsInput)
    create?: UserCreateWithoutPublicationsInput;

    @Field(() => UserCreateOrConnectWithoutPublicationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPublicationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPublicationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
