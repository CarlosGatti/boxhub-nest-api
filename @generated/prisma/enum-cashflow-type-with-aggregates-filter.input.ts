import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowType } from './cashflow-type.enum';
import { NestedEnumCashflowTypeWithAggregatesFilter } from './nested-enum-cashflow-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCashflowTypeFilter } from './nested-enum-cashflow-type-filter.input';

@InputType()
export class EnumCashflowTypeWithAggregatesFilter {

    @Field(() => CashflowType, {nullable:true})
    equals?: keyof typeof CashflowType;

    @Field(() => [CashflowType], {nullable:true})
    in?: Array<keyof typeof CashflowType>;

    @Field(() => [CashflowType], {nullable:true})
    notIn?: Array<keyof typeof CashflowType>;

    @Field(() => NestedEnumCashflowTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCashflowTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCashflowTypeFilter, {nullable:true})
    _min?: NestedEnumCashflowTypeFilter;

    @Field(() => NestedEnumCashflowTypeFilter, {nullable:true})
    _max?: NestedEnumCashflowTypeFilter;
}
