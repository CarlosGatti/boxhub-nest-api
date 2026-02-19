import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketVisionCheckinCountOrderByAggregateInput } from './bucket-vision-checkin-count-order-by-aggregate.input';
import { BucketVisionCheckinAvgOrderByAggregateInput } from './bucket-vision-checkin-avg-order-by-aggregate.input';
import { BucketVisionCheckinMaxOrderByAggregateInput } from './bucket-vision-checkin-max-order-by-aggregate.input';
import { BucketVisionCheckinMinOrderByAggregateInput } from './bucket-vision-checkin-min-order-by-aggregate.input';
import { BucketVisionCheckinSumOrderByAggregateInput } from './bucket-vision-checkin-sum-order-by-aggregate.input';

@InputType()
export class BucketVisionCheckinOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    boardId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    kind?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mood?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    snapshot?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BucketVisionCheckinCountOrderByAggregateInput, {nullable:true})
    _count?: BucketVisionCheckinCountOrderByAggregateInput;

    @Field(() => BucketVisionCheckinAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketVisionCheckinAvgOrderByAggregateInput;

    @Field(() => BucketVisionCheckinMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketVisionCheckinMaxOrderByAggregateInput;

    @Field(() => BucketVisionCheckinMinOrderByAggregateInput, {nullable:true})
    _min?: BucketVisionCheckinMinOrderByAggregateInput;

    @Field(() => BucketVisionCheckinSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketVisionCheckinSumOrderByAggregateInput;
}
