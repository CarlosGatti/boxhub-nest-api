import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';
import { Type } from 'class-transformer';
import { RecurringCashflowCreateInput } from './recurring-cashflow-create.input';
import { RecurringCashflowUpdateInput } from './recurring-cashflow-update.input';

@ArgsType()
export class UpsertOneRecurringCashflowArgs {

    @Field(() => RecurringCashflowWhereUniqueInput, {nullable:false})
    @Type(() => RecurringCashflowWhereUniqueInput)
    where!: Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>;

    @Field(() => RecurringCashflowCreateInput, {nullable:false})
    @Type(() => RecurringCashflowCreateInput)
    create!: RecurringCashflowCreateInput;

    @Field(() => RecurringCashflowUpdateInput, {nullable:false})
    @Type(() => RecurringCashflowUpdateInput)
    update!: RecurringCashflowUpdateInput;
}
