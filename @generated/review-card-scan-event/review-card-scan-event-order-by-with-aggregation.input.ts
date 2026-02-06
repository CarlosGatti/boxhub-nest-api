import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCardScanEventCountOrderByAggregateInput } from './review-card-scan-event-count-order-by-aggregate.input';
import { ReviewCardScanEventAvgOrderByAggregateInput } from './review-card-scan-event-avg-order-by-aggregate.input';
import { ReviewCardScanEventMaxOrderByAggregateInput } from './review-card-scan-event-max-order-by-aggregate.input';
import { ReviewCardScanEventMinOrderByAggregateInput } from './review-card-scan-event-min-order-by-aggregate.input';
import { ReviewCardScanEventSumOrderByAggregateInput } from './review-card-scan-event-sum-order-by-aggregate.input';

@InputType()
export class ReviewCardScanEventOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ipHash?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userAgent?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referer?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ReviewCardScanEventCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCardScanEventCountOrderByAggregateInput;

    @Field(() => ReviewCardScanEventAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewCardScanEventAvgOrderByAggregateInput;

    @Field(() => ReviewCardScanEventMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewCardScanEventMaxOrderByAggregateInput;

    @Field(() => ReviewCardScanEventMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewCardScanEventMinOrderByAggregateInput;

    @Field(() => ReviewCardScanEventSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewCardScanEventSumOrderByAggregateInput;
}
