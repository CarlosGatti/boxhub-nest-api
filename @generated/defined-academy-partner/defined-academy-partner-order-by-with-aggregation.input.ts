import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyPartnerCountOrderByAggregateInput } from './defined-academy-partner-count-order-by-aggregate.input';
import { DefinedAcademyPartnerAvgOrderByAggregateInput } from './defined-academy-partner-avg-order-by-aggregate.input';
import { DefinedAcademyPartnerMaxOrderByAggregateInput } from './defined-academy-partner-max-order-by-aggregate.input';
import { DefinedAcademyPartnerMinOrderByAggregateInput } from './defined-academy-partner-min-order-by-aggregate.input';
import { DefinedAcademyPartnerSumOrderByAggregateInput } from './defined-academy-partner-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyPartnerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    categoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    websiteUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contactUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    logoUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    location?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    featured?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyPartnerCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyPartnerCountOrderByAggregateInput;

    @Field(() => DefinedAcademyPartnerAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyPartnerAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyPartnerMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyPartnerMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyPartnerMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyPartnerMinOrderByAggregateInput;

    @Field(() => DefinedAcademyPartnerSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyPartnerSumOrderByAggregateInput;
}
