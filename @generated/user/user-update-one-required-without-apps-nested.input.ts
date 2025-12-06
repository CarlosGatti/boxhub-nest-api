import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAppsInput } from './user-create-or-connect-without-apps.input';
import { UserUpsertWithoutAppsInput } from './user-upsert-without-apps.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAppsInput } from './user-update-to-one-with-where-without-apps.input';

@InputType()
export class UserUpdateOneRequiredWithoutAppsNestedInput {

    @Field(() => UserCreateWithoutAppsInput, {nullable:true})
    @Type(() => UserCreateWithoutAppsInput)
    create?: UserCreateWithoutAppsInput;

    @Field(() => UserCreateOrConnectWithoutAppsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAppsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAppsInput;

    @Field(() => UserUpsertWithoutAppsInput, {nullable:true})
    @Type(() => UserUpsertWithoutAppsInput)
    upsert?: UserUpsertWithoutAppsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAppsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAppsInput)
    update?: UserUpdateToOneWithWhereWithoutAppsInput;
}
