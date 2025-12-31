import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';
import { Type } from 'class-transformer';
import { RecurringCashflowUpdateWithoutUserInput } from './recurring-cashflow-update-without-user.input';
import { RecurringCashflowCreateWithoutUserInput } from './recurring-cashflow-create-without-user.input';

@InputType()
export class RecurringCashflowUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => RecurringCashflowWhereUniqueInput, {nullable:false})
    @Type(() => RecurringCashflowWhereUniqueInput)
    where!: Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>;

    @Field(() => RecurringCashflowUpdateWithoutUserInput, {nullable:false})
    @Type(() => RecurringCashflowUpdateWithoutUserInput)
    update!: RecurringCashflowUpdateWithoutUserInput;

    @Field(() => RecurringCashflowCreateWithoutUserInput, {nullable:false})
    @Type(() => RecurringCashflowCreateWithoutUserInput)
    create!: RecurringCashflowCreateWithoutUserInput;
}
