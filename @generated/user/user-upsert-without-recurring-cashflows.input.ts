import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRecurringCashflowsInput } from './user-update-without-recurring-cashflows.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRecurringCashflowsInput } from './user-create-without-recurring-cashflows.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRecurringCashflowsInput {

    @Field(() => UserUpdateWithoutRecurringCashflowsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecurringCashflowsInput)
    update!: UserUpdateWithoutRecurringCashflowsInput;

    @Field(() => UserCreateWithoutRecurringCashflowsInput, {nullable:false})
    @Type(() => UserCreateWithoutRecurringCashflowsInput)
    create!: UserCreateWithoutRecurringCashflowsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
