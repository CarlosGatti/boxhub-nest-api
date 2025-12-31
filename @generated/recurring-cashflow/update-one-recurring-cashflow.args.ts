import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecurringCashflowUpdateInput } from './recurring-cashflow-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';

@ArgsType()
export class UpdateOneRecurringCashflowArgs {

    @Field(() => RecurringCashflowUpdateInput, {nullable:false})
    @Type(() => RecurringCashflowUpdateInput)
    data!: RecurringCashflowUpdateInput;

    @Field(() => RecurringCashflowWhereUniqueInput, {nullable:false})
    @Type(() => RecurringCashflowWhereUniqueInput)
    where!: Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>;
}
