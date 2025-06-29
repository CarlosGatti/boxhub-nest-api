import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCategory } from './photo-category.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPhotoCategoryFilter } from './nested-enum-photo-category-filter.input';

@InputType()
export class NestedEnumPhotoCategoryWithAggregatesFilter {

    @Field(() => PhotoCategory, {nullable:true})
    equals?: keyof typeof PhotoCategory;

    @Field(() => [PhotoCategory], {nullable:true})
    in?: Array<keyof typeof PhotoCategory>;

    @Field(() => [PhotoCategory], {nullable:true})
    notIn?: Array<keyof typeof PhotoCategory>;

    @Field(() => NestedEnumPhotoCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPhotoCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPhotoCategoryFilter, {nullable:true})
    _min?: NestedEnumPhotoCategoryFilter;

    @Field(() => NestedEnumPhotoCategoryFilter, {nullable:true})
    _max?: NestedEnumPhotoCategoryFilter;
}
