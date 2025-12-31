import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRecurringCashflowsInput } from './user-create-without-recurring-cashflows.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRecurringCashflowsInput } from './user-create-or-connect-without-recurring-cashflows.input';
import { UserUpsertWithoutRecurringCashflowsInput } from './user-upsert-without-recurring-cashflows.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRecurringCashflowsInput } from './user-update-to-one-with-where-without-recurring-cashflows.input';

@InputType()
export class UserUpdateOneRequiredWithoutRecurringCashflowsNestedInput {

    @Field(() => UserCreateWithoutRecurringCashflowsInput, {nullable:true})
    @Type(() => UserCreateWithoutRecurringCashflowsInput)
    create?: UserCreateWithoutRecurringCashflowsInput;

    @Field(() => UserCreateOrConnectWithoutRecurringCashflowsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecurringCashflowsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRecurringCashflowsInput;

    @Field(() => UserUpsertWithoutRecurringCashflowsInput, {nullable:true})
    @Type(() => UserUpsertWithoutRecurringCashflowsInput)
    upsert?: UserUpsertWithoutRecurringCashflowsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRecurringCashflowsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRecurringCashflowsInput)
    update?: UserUpdateToOneWithWhereWithoutRecurringCashflowsInput;
}
