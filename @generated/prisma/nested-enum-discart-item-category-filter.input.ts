import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCategory } from './discart-item-category.enum';

@InputType()
export class NestedEnumDiscartItemCategoryFilter {

    @Field(() => DiscartItemCategory, {nullable:true})
    equals?: keyof typeof DiscartItemCategory;

    @Field(() => [DiscartItemCategory], {nullable:true})
    in?: Array<keyof typeof DiscartItemCategory>;

    @Field(() => [DiscartItemCategory], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemCategory>;

    @Field(() => NestedEnumDiscartItemCategoryFilter, {nullable:true})
    not?: NestedEnumDiscartItemCategoryFilter;
}
