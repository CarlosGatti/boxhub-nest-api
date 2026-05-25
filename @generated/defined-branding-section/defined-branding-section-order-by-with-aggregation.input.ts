import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedBrandingSectionCountOrderByAggregateInput } from './defined-branding-section-count-order-by-aggregate.input';
import { DefinedBrandingSectionAvgOrderByAggregateInput } from './defined-branding-section-avg-order-by-aggregate.input';
import { DefinedBrandingSectionMaxOrderByAggregateInput } from './defined-branding-section-max-order-by-aggregate.input';
import { DefinedBrandingSectionMinOrderByAggregateInput } from './defined-branding-section-min-order-by-aggregate.input';
import { DefinedBrandingSectionSumOrderByAggregateInput } from './defined-branding-section-sum-order-by-aggregate.input';

@InputType()
export class DefinedBrandingSectionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandingProjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    body?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contentJson?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedBrandingSectionCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedBrandingSectionCountOrderByAggregateInput;

    @Field(() => DefinedBrandingSectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedBrandingSectionAvgOrderByAggregateInput;

    @Field(() => DefinedBrandingSectionMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedBrandingSectionMaxOrderByAggregateInput;

    @Field(() => DefinedBrandingSectionMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedBrandingSectionMinOrderByAggregateInput;

    @Field(() => DefinedBrandingSectionSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedBrandingSectionSumOrderByAggregateInput;
}
