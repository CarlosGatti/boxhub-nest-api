import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HomeOpsHouseholdOrderByWithRelationInput } from '../home-ops-household/home-ops-household-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateSlotOrderByRelationAggregateInput } from '../home-ops-task-template-slot/home-ops-task-template-slot-order-by-relation-aggregate.input';
import { HomeOpsTaskInstanceOrderByRelationAggregateInput } from '../home-ops-task-instance/home-ops-task-instance-order-by-relation-aggregate.input';

@InputType()
export class HomeOpsTaskTemplateOrderByWithRelationInput {

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

    @Field(() => HomeOpsHouseholdOrderByWithRelationInput, {nullable:true})
    household?: HomeOpsHouseholdOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    createdBy?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    fixedAssignee?: UserOrderByWithRelationInput;

    @Field(() => HomeOpsTaskTemplateSlotOrderByRelationAggregateInput, {nullable:true})
    slots?: HomeOpsTaskTemplateSlotOrderByRelationAggregateInput;

    @Field(() => HomeOpsTaskInstanceOrderByRelationAggregateInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceOrderByRelationAggregateInput;
}
