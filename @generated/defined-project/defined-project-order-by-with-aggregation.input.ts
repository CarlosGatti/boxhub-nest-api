import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedProjectCountOrderByAggregateInput } from './defined-project-count-order-by-aggregate.input';
import { DefinedProjectAvgOrderByAggregateInput } from './defined-project-avg-order-by-aggregate.input';
import { DefinedProjectMaxOrderByAggregateInput } from './defined-project-max-order-by-aggregate.input';
import { DefinedProjectMinOrderByAggregateInput } from './defined-project-min-order-by-aggregate.input';
import { DefinedProjectSumOrderByAggregateInput } from './defined-project-sum-order-by-aggregate.input';

@InputType()
export class DefinedProjectOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    budget?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deadline?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    source?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    assignedTo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    supplierId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedProjectCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedProjectCountOrderByAggregateInput;

    @Field(() => DefinedProjectAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedProjectAvgOrderByAggregateInput;

    @Field(() => DefinedProjectMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedProjectMaxOrderByAggregateInput;

    @Field(() => DefinedProjectMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedProjectMinOrderByAggregateInput;

    @Field(() => DefinedProjectSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedProjectSumOrderByAggregateInput;
}
