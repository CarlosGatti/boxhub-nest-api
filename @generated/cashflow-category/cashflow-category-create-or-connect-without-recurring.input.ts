import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateWithoutRecurringInput } from './cashflow-category-create-without-recurring.input';

@InputType()
export class CashflowCategoryCreateOrConnectWithoutRecurringInput {

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name_type'>;

    @Field(() => CashflowCategoryCreateWithoutRecurringInput, {nullable:false})
    @Type(() => CashflowCategoryCreateWithoutRecurringInput)
    create!: CashflowCategoryCreateWithoutRecurringInput;
}
