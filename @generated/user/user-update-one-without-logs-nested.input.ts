import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLogsInput } from './user-create-without-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLogsInput } from './user-create-or-connect-without-logs.input';
import { UserUpsertWithoutLogsInput } from './user-upsert-without-logs.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLogsInput } from './user-update-to-one-with-where-without-logs.input';

@InputType()
export class UserUpdateOneWithoutLogsNestedInput {

    @Field(() => UserCreateWithoutLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutLogsInput)
    create?: UserCreateWithoutLogsInput;

    @Field(() => UserCreateOrConnectWithoutLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput;

    @Field(() => UserUpsertWithoutLogsInput, {nullable:true})
    @Type(() => UserUpsertWithoutLogsInput)
    upsert?: UserUpsertWithoutLogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutLogsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLogsInput)
    update?: UserUpdateToOneWithWhereWithoutLogsInput;
}
