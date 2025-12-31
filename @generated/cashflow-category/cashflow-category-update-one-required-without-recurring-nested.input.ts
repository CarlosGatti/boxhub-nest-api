import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryCreateWithoutRecurringInput } from './cashflow-category-create-without-recurring.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateOrConnectWithoutRecurringInput } from './cashflow-category-create-or-connect-without-recurring.input';
import { CashflowCategoryUpsertWithoutRecurringInput } from './cashflow-category-upsert-without-recurring.input';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { CashflowCategoryUpdateToOneWithWhereWithoutRecurringInput } from './cashflow-category-update-to-one-with-where-without-recurring.input';

@InputType()
export class CashflowCategoryUpdateOneRequiredWithoutRecurringNestedInput {

    @Field(() => CashflowCategoryCreateWithoutRecurringInput, {nullable:true})
    @Type(() => CashflowCategoryCreateWithoutRecurringInput)
    create?: CashflowCategoryCreateWithoutRecurringInput;

    @Field(() => CashflowCategoryCreateOrConnectWithoutRecurringInput, {nullable:true})
    @Type(() => CashflowCategoryCreateOrConnectWithoutRecurringInput)
    connectOrCreate?: CashflowCategoryCreateOrConnectWithoutRecurringInput;

    @Field(() => CashflowCategoryUpsertWithoutRecurringInput, {nullable:true})
    @Type(() => CashflowCategoryUpsertWithoutRecurringInput)
    upsert?: CashflowCategoryUpsertWithoutRecurringInput;

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>;

    @Field(() => CashflowCategoryUpdateToOneWithWhereWithoutRecurringInput, {nullable:true})
    @Type(() => CashflowCategoryUpdateToOneWithWhereWithoutRecurringInput)
    update?: CashflowCategoryUpdateToOneWithWhereWithoutRecurringInput;
}
