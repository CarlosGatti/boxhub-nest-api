import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCardExportCountOrderByAggregateInput } from './review-card-export-count-order-by-aggregate.input';
import { ReviewCardExportAvgOrderByAggregateInput } from './review-card-export-avg-order-by-aggregate.input';
import { ReviewCardExportMaxOrderByAggregateInput } from './review-card-export-max-order-by-aggregate.input';
import { ReviewCardExportMinOrderByAggregateInput } from './review-card-export-min-order-by-aggregate.input';
import { ReviewCardExportSumOrderByAggregateInput } from './review-card-export-sum-order-by-aggregate.input';

@InputType()
export class ReviewCardExportOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    fileUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    errorMessage?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ReviewCardExportCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCardExportCountOrderByAggregateInput;

    @Field(() => ReviewCardExportAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewCardExportAvgOrderByAggregateInput;

    @Field(() => ReviewCardExportMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewCardExportMaxOrderByAggregateInput;

    @Field(() => ReviewCardExportMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewCardExportMinOrderByAggregateInput;

    @Field(() => ReviewCardExportSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewCardExportSumOrderByAggregateInput;
}
