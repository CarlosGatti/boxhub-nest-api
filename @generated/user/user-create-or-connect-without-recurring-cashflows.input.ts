import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecurringCashflowsInput } from './user-create-without-recurring-cashflows.input';

@InputType()
export class UserCreateOrConnectWithoutRecurringCashflowsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutRecurringCashflowsInput, {nullable:false})
    @Type(() => UserCreateWithoutRecurringCashflowsInput)
    create!: UserCreateWithoutRecurringCashflowsInput;
}
