import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HomeOpsTaskTemplateCountOrderByAggregateInput } from './home-ops-task-template-count-order-by-aggregate.input';
import { HomeOpsTaskTemplateAvgOrderByAggregateInput } from './home-ops-task-template-avg-order-by-aggregate.input';
import { HomeOpsTaskTemplateMaxOrderByAggregateInput } from './home-ops-task-template-max-order-by-aggregate.input';
import { HomeOpsTaskTemplateMinOrderByAggregateInput } from './home-ops-task-template-min-order-by-aggregate.input';
import { HomeOpsTaskTemplateSumOrderByAggregateInput } from './home-ops-task-template-sum-order-by-aggregate.input';

@InputType()
export class HomeOpsTaskTemplateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    category?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effortWeight?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    estimatedMinutes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    frequency?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    occurrences?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    interval?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    daysOfWeek?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    dayOfMonth?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignmentMode?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    fixedAssigneeId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HomeOpsTaskTemplateCountOrderByAggregateInput, {nullable:true})
    _count?: HomeOpsTaskTemplateCountOrderByAggregateInput;

    @Field(() => HomeOpsTaskTemplateAvgOrderByAggregateInput, {nullable:true})
    _avg?: HomeOpsTaskTemplateAvgOrderByAggregateInput;

    @Field(() => HomeOpsTaskTemplateMaxOrderByAggregateInput, {nullable:true})
    _max?: HomeOpsTaskTemplateMaxOrderByAggregateInput;

    @Field(() => HomeOpsTaskTemplateMinOrderByAggregateInput, {nullable:true})
    _min?: HomeOpsTaskTemplateMinOrderByAggregateInput;

    @Field(() => HomeOpsTaskTemplateSumOrderByAggregateInput, {nullable:true})
    _sum?: HomeOpsTaskTemplateSumOrderByAggregateInput;
}
