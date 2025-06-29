import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PermitInspectionCountOrderByAggregateInput } from './permit-inspection-count-order-by-aggregate.input';
import { PermitInspectionAvgOrderByAggregateInput } from './permit-inspection-avg-order-by-aggregate.input';
import { PermitInspectionMaxOrderByAggregateInput } from './permit-inspection-max-order-by-aggregate.input';
import { PermitInspectionMinOrderByAggregateInput } from './permit-inspection-min-order-by-aggregate.input';
import { PermitInspectionSumOrderByAggregateInput } from './permit-inspection-sum-order-by-aggregate.input';

@InputType()
export class PermitInspectionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    requestedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approvedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fileUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    responsibleId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PermitInspectionCountOrderByAggregateInput, {nullable:true})
    _count?: PermitInspectionCountOrderByAggregateInput;

    @Field(() => PermitInspectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: PermitInspectionAvgOrderByAggregateInput;

    @Field(() => PermitInspectionMaxOrderByAggregateInput, {nullable:true})
    _max?: PermitInspectionMaxOrderByAggregateInput;

    @Field(() => PermitInspectionMinOrderByAggregateInput, {nullable:true})
    _min?: PermitInspectionMinOrderByAggregateInput;

    @Field(() => PermitInspectionSumOrderByAggregateInput, {nullable:true})
    _sum?: PermitInspectionSumOrderByAggregateInput;
}
