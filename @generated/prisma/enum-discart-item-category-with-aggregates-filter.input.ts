import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCategory } from './discart-item-category.enum';
import { NestedEnumDiscartItemCategoryWithAggregatesFilter } from './nested-enum-discart-item-category-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDiscartItemCategoryFilter } from './nested-enum-discart-item-category-filter.input';

@InputType()
export class EnumDiscartItemCategoryWithAggregatesFilter {

    @Field(() => DiscartItemCategory, {nullable:true})
    equals?: keyof typeof DiscartItemCategory;

    @Field(() => [DiscartItemCategory], {nullable:true})
    in?: Array<keyof typeof DiscartItemCategory>;

    @Field(() => [DiscartItemCategory], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemCategory>;

    @Field(() => NestedEnumDiscartItemCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDiscartItemCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDiscartItemCategoryFilter, {nullable:true})
    _min?: NestedEnumDiscartItemCategoryFilter;

    @Field(() => NestedEnumDiscartItemCategoryFilter, {nullable:true})
    _max?: NestedEnumDiscartItemCategoryFilter;
}
