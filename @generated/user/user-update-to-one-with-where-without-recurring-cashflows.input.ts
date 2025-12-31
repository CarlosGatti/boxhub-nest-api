import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRecurringCashflowsInput } from './user-update-without-recurring-cashflows.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRecurringCashflowsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRecurringCashflowsInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecurringCashflowsInput)
    data!: UserUpdateWithoutRecurringCashflowsInput;
}
