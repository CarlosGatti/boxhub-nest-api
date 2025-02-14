import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPublicationsInput } from './user-create-without-publications.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPublicationsInput } from './user-create-or-connect-without-publications.input';
import { UserUpsertWithoutPublicationsInput } from './user-upsert-without-publications.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPublicationsInput } from './user-update-to-one-with-where-without-publications.input';

@InputType()
export class UserUpdateOneWithoutPublicationsNestedInput {

    @Field(() => UserCreateWithoutPublicationsInput, {nullable:true})
    @Type(() => UserCreateWithoutPublicationsInput)
    create?: UserCreateWithoutPublicationsInput;

    @Field(() => UserCreateOrConnectWithoutPublicationsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPublicationsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPublicationsInput;

    @Field(() => UserUpsertWithoutPublicationsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPublicationsInput)
    upsert?: UserUpsertWithoutPublicationsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPublicationsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPublicationsInput)
    update?: UserUpdateToOneWithWhereWithoutPublicationsInput;
}
