import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StorageMemberCountOrderByAggregateInput } from './storage-member-count-order-by-aggregate.input';
import { StorageMemberAvgOrderByAggregateInput } from './storage-member-avg-order-by-aggregate.input';
import { StorageMemberMaxOrderByAggregateInput } from './storage-member-max-order-by-aggregate.input';
import { StorageMemberMinOrderByAggregateInput } from './storage-member-min-order-by-aggregate.input';
import { StorageMemberSumOrderByAggregateInput } from './storage-member-sum-order-by-aggregate.input';

@InputType()
export class StorageMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    storageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => StorageMemberCountOrderByAggregateInput, {nullable:true})
    _count?: StorageMemberCountOrderByAggregateInput;

    @Field(() => StorageMemberAvgOrderByAggregateInput, {nullable:true})
    _avg?: StorageMemberAvgOrderByAggregateInput;

    @Field(() => StorageMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: StorageMemberMaxOrderByAggregateInput;

    @Field(() => StorageMemberMinOrderByAggregateInput, {nullable:true})
    _min?: StorageMemberMinOrderByAggregateInput;

    @Field(() => StorageMemberSumOrderByAggregateInput, {nullable:true})
    _sum?: StorageMemberSumOrderByAggregateInput;
}
