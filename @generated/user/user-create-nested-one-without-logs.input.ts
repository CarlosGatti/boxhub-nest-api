import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLogsInput } from './user-create-without-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLogsInput } from './user-create-or-connect-without-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLogsInput {

    @Field(() => UserCreateWithoutLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutLogsInput)
    create?: UserCreateWithoutLogsInput;

    @Field(() => UserCreateOrConnectWithoutLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
