import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutConstructionLogsInput } from './user-create-without-construction-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutConstructionLogsInput } from './user-create-or-connect-without-construction-logs.input';
import { UserUpsertWithoutConstructionLogsInput } from './user-upsert-without-construction-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutConstructionLogsInput } from './user-update-to-one-with-where-without-construction-logs.input';

@InputType()
export class UserUpdateOneRequiredWithoutConstructionLogsNestedInput {

    @Field(() => UserCreateWithoutConstructionLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutConstructionLogsInput)
    create?: UserCreateWithoutConstructionLogsInput;

    @Field(() => UserCreateOrConnectWithoutConstructionLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutConstructionLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutConstructionLogsInput;

    @Field(() => UserUpsertWithoutConstructionLogsInput, {nullable:true})
    @Type(() => UserUpsertWithoutConstructionLogsInput)
    upsert?: UserUpsertWithoutConstructionLogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutConstructionLogsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutConstructionLogsInput)
    update?: UserUpdateToOneWithWhereWithoutConstructionLogsInput;
}
