import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedBrandingAssetCountOrderByAggregateInput } from './defined-branding-asset-count-order-by-aggregate.input';
import { DefinedBrandingAssetAvgOrderByAggregateInput } from './defined-branding-asset-avg-order-by-aggregate.input';
import { DefinedBrandingAssetMaxOrderByAggregateInput } from './defined-branding-asset-max-order-by-aggregate.input';
import { DefinedBrandingAssetMinOrderByAggregateInput } from './defined-branding-asset-min-order-by-aggregate.input';
import { DefinedBrandingAssetSumOrderByAggregateInput } from './defined-branding-asset-sum-order-by-aggregate.input';

@InputType()
export class DefinedBrandingAssetOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandingProjectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileUrl?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    fileName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mimeType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedBrandingAssetCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedBrandingAssetCountOrderByAggregateInput;

    @Field(() => DefinedBrandingAssetAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedBrandingAssetAvgOrderByAggregateInput;

    @Field(() => DefinedBrandingAssetMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedBrandingAssetMaxOrderByAggregateInput;

    @Field(() => DefinedBrandingAssetMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedBrandingAssetMinOrderByAggregateInput;

    @Field(() => DefinedBrandingAssetSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedBrandingAssetSumOrderByAggregateInput;
}
