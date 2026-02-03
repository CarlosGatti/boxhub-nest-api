import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HomeOpsTaskInstanceAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    templateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weeklyPlanId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effortWeight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    estimatedMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assigneeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completedById?: keyof typeof SortOrder;
}
