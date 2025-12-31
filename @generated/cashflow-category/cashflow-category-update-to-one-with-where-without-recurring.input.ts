import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';
import { Type } from 'class-transformer';
import { CashflowCategoryUpdateWithoutRecurringInput } from './cashflow-category-update-without-recurring.input';

@InputType()
export class CashflowCategoryUpdateToOneWithWhereWithoutRecurringInput {

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    @Type(() => CashflowCategoryWhereInput)
    where?: CashflowCategoryWhereInput;

    @Field(() => CashflowCategoryUpdateWithoutRecurringInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateWithoutRecurringInput)
    data!: CashflowCategoryUpdateWithoutRecurringInput;
}
