import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedBrandingProjectCountOrderByAggregateInput } from './defined-branding-project-count-order-by-aggregate.input';
import { DefinedBrandingProjectAvgOrderByAggregateInput } from './defined-branding-project-avg-order-by-aggregate.input';
import { DefinedBrandingProjectMaxOrderByAggregateInput } from './defined-branding-project-max-order-by-aggregate.input';
import { DefinedBrandingProjectMinOrderByAggregateInput } from './defined-branding-project-min-order-by-aggregate.input';
import { DefinedBrandingProjectSumOrderByAggregateInput } from './defined-branding-project-sum-order-by-aggregate.input';

@InputType()
export class DefinedBrandingProjectOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    concept?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isFeatured?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    coverImageUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    brandManualPdfUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sourcePdfFileName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedBrandingProjectCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedBrandingProjectCountOrderByAggregateInput;

    @Field(() => DefinedBrandingProjectAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedBrandingProjectAvgOrderByAggregateInput;

    @Field(() => DefinedBrandingProjectMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedBrandingProjectMaxOrderByAggregateInput;

    @Field(() => DefinedBrandingProjectMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedBrandingProjectMinOrderByAggregateInput;

    @Field(() => DefinedBrandingProjectSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedBrandingProjectSumOrderByAggregateInput;
}
