import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCashflowEntriesInput } from './user-create-without-cashflow-entries.input';

@InputType()
export class UserCreateOrConnectWithoutCashflowEntriesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutCashflowEntriesInput, {nullable:false})
    @Type(() => UserCreateWithoutCashflowEntriesInput)
    create!: UserCreateWithoutCashflowEntriesInput;
}
