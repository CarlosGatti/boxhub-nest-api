import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryCreateWithoutRecurringInput } from './cashflow-category-create-without-recurring.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateOrConnectWithoutRecurringInput } from './cashflow-category-create-or-connect-without-recurring.input';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';

@InputType()
export class CashflowCategoryCreateNestedOneWithoutRecurringInput {

    @Field(() => CashflowCategoryCreateWithoutRecurringInput, {nullable:true})
    @Type(() => CashflowCategoryCreateWithoutRecurringInput)
    create?: CashflowCategoryCreateWithoutRecurringInput;

    @Field(() => CashflowCategoryCreateOrConnectWithoutRecurringInput, {nullable:true})
    @Type(() => CashflowCategoryCreateOrConnectWithoutRecurringInput)
    connectOrCreate?: CashflowCategoryCreateOrConnectWithoutRecurringInput;

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name_type'>;
}
