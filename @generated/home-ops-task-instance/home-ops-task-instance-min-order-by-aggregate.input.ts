import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HomeOpsTaskInstanceMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    templateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weeklyPlanId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effortWeight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    estimatedMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slotLabel?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    windowStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    windowEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assigneeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completedById?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skippedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skipReason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
