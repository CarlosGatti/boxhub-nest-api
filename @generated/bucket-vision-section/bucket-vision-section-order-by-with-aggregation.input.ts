import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketVisionSectionCountOrderByAggregateInput } from './bucket-vision-section-count-order-by-aggregate.input';
import { BucketVisionSectionAvgOrderByAggregateInput } from './bucket-vision-section-avg-order-by-aggregate.input';
import { BucketVisionSectionMaxOrderByAggregateInput } from './bucket-vision-section-max-order-by-aggregate.input';
import { BucketVisionSectionMinOrderByAggregateInput } from './bucket-vision-section-min-order-by-aggregate.input';
import { BucketVisionSectionSumOrderByAggregateInput } from './bucket-vision-section-sum-order-by-aggregate.input';

@InputType()
export class BucketVisionSectionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    boardId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketVisionSectionCountOrderByAggregateInput, {nullable:true})
    _count?: BucketVisionSectionCountOrderByAggregateInput;

    @Field(() => BucketVisionSectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketVisionSectionAvgOrderByAggregateInput;

    @Field(() => BucketVisionSectionMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketVisionSectionMaxOrderByAggregateInput;

    @Field(() => BucketVisionSectionMinOrderByAggregateInput, {nullable:true})
    _min?: BucketVisionSectionMinOrderByAggregateInput;

    @Field(() => BucketVisionSectionSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketVisionSectionSumOrderByAggregateInput;
}
