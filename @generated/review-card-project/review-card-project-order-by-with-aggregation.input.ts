import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCardProjectCountOrderByAggregateInput } from './review-card-project-count-order-by-aggregate.input';
import { ReviewCardProjectAvgOrderByAggregateInput } from './review-card-project-avg-order-by-aggregate.input';
import { ReviewCardProjectMaxOrderByAggregateInput } from './review-card-project-max-order-by-aggregate.input';
import { ReviewCardProjectMinOrderByAggregateInput } from './review-card-project-min-order-by-aggregate.input';
import { ReviewCardProjectSumOrderByAggregateInput } from './review-card-project-sum-order-by-aggregate.input';

@InputType()
export class ReviewCardProjectOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    businessId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    templateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    slug?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewLinkMode?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    googleReviewUrlFinal?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    designJson?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    assetsJson?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ReviewCardProjectCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCardProjectCountOrderByAggregateInput;

    @Field(() => ReviewCardProjectAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewCardProjectAvgOrderByAggregateInput;

    @Field(() => ReviewCardProjectMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewCardProjectMaxOrderByAggregateInput;

    @Field(() => ReviewCardProjectMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewCardProjectMinOrderByAggregateInput;

    @Field(() => ReviewCardProjectSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewCardProjectSumOrderByAggregateInput;
}
