import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HomeOpsTaskTemplateSlotCountOrderByAggregateInput } from './home-ops-task-template-slot-count-order-by-aggregate.input';
import { HomeOpsTaskTemplateSlotAvgOrderByAggregateInput } from './home-ops-task-template-slot-avg-order-by-aggregate.input';
import { HomeOpsTaskTemplateSlotMaxOrderByAggregateInput } from './home-ops-task-template-slot-max-order-by-aggregate.input';
import { HomeOpsTaskTemplateSlotMinOrderByAggregateInput } from './home-ops-task-template-slot-min-order-by-aggregate.input';
import { HomeOpsTaskTemplateSlotSumOrderByAggregateInput } from './home-ops-task-template-slot-sum-order-by-aggregate.input';

@InputType()
export class HomeOpsTaskTemplateSlotOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    templateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    label?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    windowStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    windowEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => HomeOpsTaskTemplateSlotCountOrderByAggregateInput, {nullable:true})
    _count?: HomeOpsTaskTemplateSlotCountOrderByAggregateInput;

    @Field(() => HomeOpsTaskTemplateSlotAvgOrderByAggregateInput, {nullable:true})
    _avg?: HomeOpsTaskTemplateSlotAvgOrderByAggregateInput;

    @Field(() => HomeOpsTaskTemplateSlotMaxOrderByAggregateInput, {nullable:true})
    _max?: HomeOpsTaskTemplateSlotMaxOrderByAggregateInput;

    @Field(() => HomeOpsTaskTemplateSlotMinOrderByAggregateInput, {nullable:true})
    _min?: HomeOpsTaskTemplateSlotMinOrderByAggregateInput;

    @Field(() => HomeOpsTaskTemplateSlotSumOrderByAggregateInput, {nullable:true})
    _sum?: HomeOpsTaskTemplateSlotSumOrderByAggregateInput;
}
