import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';
import { Type } from 'class-transformer';
import { RecurringCashflowUpdateWithoutCategoryInput } from './recurring-cashflow-update-without-category.input';

@InputType()
export class RecurringCashflowUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => RecurringCashflowWhereUniqueInput, {nullable:false})
    @Type(() => RecurringCashflowWhereUniqueInput)
    where!: Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>;

    @Field(() => RecurringCashflowUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => RecurringCashflowUpdateWithoutCategoryInput)
    data!: RecurringCashflowUpdateWithoutCategoryInput;
}
