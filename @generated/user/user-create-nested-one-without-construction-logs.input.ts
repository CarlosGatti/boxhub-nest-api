import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutConstructionLogsInput } from './user-create-without-construction-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutConstructionLogsInput } from './user-create-or-connect-without-construction-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutConstructionLogsInput {

    @Field(() => UserCreateWithoutConstructionLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutConstructionLogsInput)
    create?: UserCreateWithoutConstructionLogsInput;

    @Field(() => UserCreateOrConnectWithoutConstructionLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutConstructionLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutConstructionLogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
