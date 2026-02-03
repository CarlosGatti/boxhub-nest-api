import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HomeOpsTaskTemplateAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effortWeight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    estimatedMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    occurrences?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    interval?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dayOfMonth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fixedAssigneeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;
}
