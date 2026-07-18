import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyPartnerCategoryCountOrderByAggregateInput } from './defined-academy-partner-category-count-order-by-aggregate.input';
import { DefinedAcademyPartnerCategoryAvgOrderByAggregateInput } from './defined-academy-partner-category-avg-order-by-aggregate.input';
import { DefinedAcademyPartnerCategoryMaxOrderByAggregateInput } from './defined-academy-partner-category-max-order-by-aggregate.input';
import { DefinedAcademyPartnerCategoryMinOrderByAggregateInput } from './defined-academy-partner-category-min-order-by-aggregate.input';
import { DefinedAcademyPartnerCategorySumOrderByAggregateInput } from './defined-academy-partner-category-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyPartnerCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyPartnerCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyPartnerCategoryCountOrderByAggregateInput;

    @Field(() => DefinedAcademyPartnerCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyPartnerCategoryAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyPartnerCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyPartnerCategoryMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyPartnerCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyPartnerCategoryMinOrderByAggregateInput;

    @Field(() => DefinedAcademyPartnerCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyPartnerCategorySumOrderByAggregateInput;
}
