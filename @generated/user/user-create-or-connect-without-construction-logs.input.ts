import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutConstructionLogsInput } from './user-create-without-construction-logs.input';

@InputType()
export class UserCreateOrConnectWithoutConstructionLogsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutConstructionLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutConstructionLogsInput)
    create!: UserCreateWithoutConstructionLogsInput;
}
