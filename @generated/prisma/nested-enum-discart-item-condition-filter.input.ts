import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCondition } from './discart-item-condition.enum';

@InputType()
export class NestedEnumDiscartItemConditionFilter {

    @Field(() => DiscartItemCondition, {nullable:true})
    equals?: keyof typeof DiscartItemCondition;

    @Field(() => [DiscartItemCondition], {nullable:true})
    in?: Array<keyof typeof DiscartItemCondition>;

    @Field(() => [DiscartItemCondition], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemCondition>;

    @Field(() => NestedEnumDiscartItemConditionFilter, {nullable:true})
    not?: NestedEnumDiscartItemConditionFilter;
}
