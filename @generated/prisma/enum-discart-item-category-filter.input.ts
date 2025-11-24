import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCategory } from './discart-item-category.enum';
import { NestedEnumDiscartItemCategoryFilter } from './nested-enum-discart-item-category-filter.input';

@InputType()
export class EnumDiscartItemCategoryFilter {

    @Field(() => DiscartItemCategory, {nullable:true})
    equals?: keyof typeof DiscartItemCategory;

    @Field(() => [DiscartItemCategory], {nullable:true})
    in?: Array<keyof typeof DiscartItemCategory>;

    @Field(() => [DiscartItemCategory], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemCategory>;

    @Field(() => NestedEnumDiscartItemCategoryFilter, {nullable:true})
    not?: NestedEnumDiscartItemCategoryFilter;
}
