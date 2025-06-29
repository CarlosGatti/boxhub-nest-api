import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCategory } from './photo-category.enum';
import { NestedEnumPhotoCategoryFilter } from './nested-enum-photo-category-filter.input';

@InputType()
export class EnumPhotoCategoryFilter {

    @Field(() => PhotoCategory, {nullable:true})
    equals?: keyof typeof PhotoCategory;

    @Field(() => [PhotoCategory], {nullable:true})
    in?: Array<keyof typeof PhotoCategory>;

    @Field(() => [PhotoCategory], {nullable:true})
    notIn?: Array<keyof typeof PhotoCategory>;

    @Field(() => NestedEnumPhotoCategoryFilter, {nullable:true})
    not?: NestedEnumPhotoCategoryFilter;
}
