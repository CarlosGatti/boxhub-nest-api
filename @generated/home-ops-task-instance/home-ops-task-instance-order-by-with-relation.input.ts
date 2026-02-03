import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HomeOpsHouseholdOrderByWithRelationInput } from '../home-ops-household/home-ops-household-order-by-with-relation.input';
import { HomeOpsTaskTemplateOrderByWithRelationInput } from '../home-ops-task-template/home-ops-task-template-order-by-with-relation.input';
import { HomeOpsWeeklyPlanOrderByWithRelationInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskInstanceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    templateId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    weeklyPlanId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sourceKey?: SortOrderInput;

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
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    slotLabel?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    windowStart?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    windowEnd?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    assigneeId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    completedById?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    skippedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    skipReason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HomeOpsHouseholdOrderByWithRelationInput, {nullable:true})
    household?: HomeOpsHouseholdOrderByWithRelationInput;

    @Field(() => HomeOpsTaskTemplateOrderByWithRelationInput, {nullable:true})
    template?: HomeOpsTaskTemplateOrderByWithRelationInput;

    @Field(() => HomeOpsWeeklyPlanOrderByWithRelationInput, {nullable:true})
    weeklyPlan?: HomeOpsWeeklyPlanOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    assignee?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    completedBy?: UserOrderByWithRelationInput;
}
