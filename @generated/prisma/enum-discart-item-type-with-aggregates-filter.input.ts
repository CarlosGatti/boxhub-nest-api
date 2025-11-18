import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemType } from './discart-item-type.enum';
import { NestedEnumDiscartItemTypeWithAggregatesFilter } from './nested-enum-discart-item-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDiscartItemTypeFilter } from './nested-enum-discart-item-type-filter.input';

@InputType()
export class EnumDiscartItemTypeWithAggregatesFilter {

    @Field(() => DiscartItemType, {nullable:true})
    equals?: keyof typeof DiscartItemType;

    @Field(() => [DiscartItemType], {nullable:true})
    in?: Array<keyof typeof DiscartItemType>;

    @Field(() => [DiscartItemType], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemType>;

    @Field(() => NestedEnumDiscartItemTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDiscartItemTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDiscartItemTypeFilter, {nullable:true})
    _min?: NestedEnumDiscartItemTypeFilter;

    @Field(() => NestedEnumDiscartItemTypeFilter, {nullable:true})
    _max?: NestedEnumDiscartItemTypeFilter;
}
