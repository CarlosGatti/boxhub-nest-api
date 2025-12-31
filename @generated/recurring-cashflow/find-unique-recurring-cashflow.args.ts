import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecurringCashflowArgs {

    @Field(() => RecurringCashflowWhereUniqueInput, {nullable:false})
    @Type(() => RecurringCashflowWhereUniqueInput)
    where!: Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>;
}
