import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HomeOpsTaskTemplateCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

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
    frequency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    occurrences?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    interval?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    daysOfWeek?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dayOfMonth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignmentMode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fixedAssigneeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
