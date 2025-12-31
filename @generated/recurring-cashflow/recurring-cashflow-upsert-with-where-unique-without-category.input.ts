import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';
import { Type } from 'class-transformer';
import { RecurringCashflowUpdateWithoutCategoryInput } from './recurring-cashflow-update-without-category.input';
import { RecurringCashflowCreateWithoutCategoryInput } from './recurring-cashflow-create-without-category.input';

@InputType()
export class RecurringCashflowUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => RecurringCashflowWhereUniqueInput, {nullable:false})
    @Type(() => RecurringCashflowWhereUniqueInput)
    where!: Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>;

    @Field(() => RecurringCashflowUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => RecurringCashflowUpdateWithoutCategoryInput)
    update!: RecurringCashflowUpdateWithoutCategoryInput;

    @Field(() => RecurringCashflowCreateWithoutCategoryInput, {nullable:false})
    @Type(() => RecurringCashflowCreateWithoutCategoryInput)
    create!: RecurringCashflowCreateWithoutCategoryInput;
}
