import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowType } from './cashflow-type.enum';
import { NestedEnumCashflowTypeFilter } from './nested-enum-cashflow-type-filter.input';

@InputType()
export class EnumCashflowTypeFilter {

    @Field(() => CashflowType, {nullable:true})
    equals?: keyof typeof CashflowType;

    @Field(() => [CashflowType], {nullable:true})
    in?: Array<keyof typeof CashflowType>;

    @Field(() => [CashflowType], {nullable:true})
    notIn?: Array<keyof typeof CashflowType>;

    @Field(() => NestedEnumCashflowTypeFilter, {nullable:true})
    not?: NestedEnumCashflowTypeFilter;
}
