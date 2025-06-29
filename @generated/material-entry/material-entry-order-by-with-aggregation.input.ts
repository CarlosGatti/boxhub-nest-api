import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MaterialEntryCountOrderByAggregateInput } from './material-entry-count-order-by-aggregate.input';
import { MaterialEntryAvgOrderByAggregateInput } from './material-entry-avg-order-by-aggregate.input';
import { MaterialEntryMaxOrderByAggregateInput } from './material-entry-max-order-by-aggregate.input';
import { MaterialEntryMinOrderByAggregateInput } from './material-entry-min-order-by-aggregate.input';
import { MaterialEntrySumOrderByAggregateInput } from './material-entry-sum-order-by-aggregate.input';

@InputType()
export class MaterialEntryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    supplier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    receivedById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    receivedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    note?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    imageUrls?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MaterialEntryCountOrderByAggregateInput, {nullable:true})
    _count?: MaterialEntryCountOrderByAggregateInput;

    @Field(() => MaterialEntryAvgOrderByAggregateInput, {nullable:true})
    _avg?: MaterialEntryAvgOrderByAggregateInput;

    @Field(() => MaterialEntryMaxOrderByAggregateInput, {nullable:true})
    _max?: MaterialEntryMaxOrderByAggregateInput;

    @Field(() => MaterialEntryMinOrderByAggregateInput, {nullable:true})
    _min?: MaterialEntryMinOrderByAggregateInput;

    @Field(() => MaterialEntrySumOrderByAggregateInput, {nullable:true})
    _sum?: MaterialEntrySumOrderByAggregateInput;
}
