import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCondition } from './discart-item-condition.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDiscartItemConditionFilter } from './nested-enum-discart-item-condition-filter.input';

@InputType()
export class NestedEnumDiscartItemConditionWithAggregatesFilter {

    @Field(() => DiscartItemCondition, {nullable:true})
    equals?: keyof typeof DiscartItemCondition;

    @Field(() => [DiscartItemCondition], {nullable:true})
    in?: Array<keyof typeof DiscartItemCondition>;

    @Field(() => [DiscartItemCondition], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemCondition>;

    @Field(() => NestedEnumDiscartItemConditionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDiscartItemConditionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDiscartItemConditionFilter, {nullable:true})
    _min?: NestedEnumDiscartItemConditionFilter;

    @Field(() => NestedEnumDiscartItemConditionFilter, {nullable:true})
    _max?: NestedEnumDiscartItemConditionFilter;
}
