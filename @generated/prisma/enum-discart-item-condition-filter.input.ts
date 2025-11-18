import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCondition } from './discart-item-condition.enum';
import { NestedEnumDiscartItemConditionFilter } from './nested-enum-discart-item-condition-filter.input';

@InputType()
export class EnumDiscartItemConditionFilter {

    @Field(() => DiscartItemCondition, {nullable:true})
    equals?: keyof typeof DiscartItemCondition;

    @Field(() => [DiscartItemCondition], {nullable:true})
    in?: Array<keyof typeof DiscartItemCondition>;

    @Field(() => [DiscartItemCondition], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemCondition>;

    @Field(() => NestedEnumDiscartItemConditionFilter, {nullable:true})
    not?: NestedEnumDiscartItemConditionFilter;
}
