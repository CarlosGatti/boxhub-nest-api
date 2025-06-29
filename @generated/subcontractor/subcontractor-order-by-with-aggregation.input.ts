import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubcontractorCountOrderByAggregateInput } from './subcontractor-count-order-by-aggregate.input';
import { SubcontractorAvgOrderByAggregateInput } from './subcontractor-avg-order-by-aggregate.input';
import { SubcontractorMaxOrderByAggregateInput } from './subcontractor-max-order-by-aggregate.input';
import { SubcontractorMinOrderByAggregateInput } from './subcontractor-min-order-by-aggregate.input';
import { SubcontractorSumOrderByAggregateInput } from './subcontractor-sum-order-by-aggregate.input';

@InputType()
export class SubcontractorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    companyName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contactName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trade?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bankAccount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentPreference?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    priority?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdViaPublicForm?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SubcontractorCountOrderByAggregateInput, {nullable:true})
    _count?: SubcontractorCountOrderByAggregateInput;

    @Field(() => SubcontractorAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubcontractorAvgOrderByAggregateInput;

    @Field(() => SubcontractorMaxOrderByAggregateInput, {nullable:true})
    _max?: SubcontractorMaxOrderByAggregateInput;

    @Field(() => SubcontractorMinOrderByAggregateInput, {nullable:true})
    _min?: SubcontractorMinOrderByAggregateInput;

    @Field(() => SubcontractorSumOrderByAggregateInput, {nullable:true})
    _sum?: SubcontractorSumOrderByAggregateInput;
}
