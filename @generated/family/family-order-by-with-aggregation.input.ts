import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FamilyCountOrderByAggregateInput } from './family-count-order-by-aggregate.input';
import { FamilyAvgOrderByAggregateInput } from './family-avg-order-by-aggregate.input';
import { FamilyMaxOrderByAggregateInput } from './family-max-order-by-aggregate.input';
import { FamilyMinOrderByAggregateInput } from './family-min-order-by-aggregate.input';
import { FamilySumOrderByAggregateInput } from './family-sum-order-by-aggregate.input';

@InputType()
export class FamilyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FamilyCountOrderByAggregateInput, {nullable:true})
    _count?: FamilyCountOrderByAggregateInput;

    @Field(() => FamilyAvgOrderByAggregateInput, {nullable:true})
    _avg?: FamilyAvgOrderByAggregateInput;

    @Field(() => FamilyMaxOrderByAggregateInput, {nullable:true})
    _max?: FamilyMaxOrderByAggregateInput;

    @Field(() => FamilyMinOrderByAggregateInput, {nullable:true})
    _min?: FamilyMinOrderByAggregateInput;

    @Field(() => FamilySumOrderByAggregateInput, {nullable:true})
    _sum?: FamilySumOrderByAggregateInput;
}
