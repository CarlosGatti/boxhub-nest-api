import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAppsInput } from './user-create-or-connect-without-apps.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAppsInput {

    @Field(() => UserCreateWithoutAppsInput, {nullable:true})
    @Type(() => UserCreateWithoutAppsInput)
    create?: UserCreateWithoutAppsInput;

    @Field(() => UserCreateOrConnectWithoutAppsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAppsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAppsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
