import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLogsInput } from './user-create-without-logs.input';

@InputType()
export class UserCreateOrConnectWithoutLogsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutLogsInput)
    create!: UserCreateWithoutLogsInput;
}
