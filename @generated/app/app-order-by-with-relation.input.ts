import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserAppAccessOrderByRelationAggregateInput } from '../user-app-access/user-app-access-order-by-relation-aggregate.input';
import { FeedbackOrderByRelationAggregateInput } from '../feedback/feedback-order-by-relation-aggregate.input';
import { HomeOpsHouseholdOrderByRelationAggregateInput } from '../home-ops-household/home-ops-household-order-by-relation-aggregate.input';

@InputType()
export class AppOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserAppAccessOrderByRelationAggregateInput, {nullable:true})
    users?: UserAppAccessOrderByRelationAggregateInput;

    @Field(() => FeedbackOrderByRelationAggregateInput, {nullable:true})
    feedbacks?: FeedbackOrderByRelationAggregateInput;

    @Field(() => HomeOpsHouseholdOrderByRelationAggregateInput, {nullable:true})
    homeOpsHouseholds?: HomeOpsHouseholdOrderByRelationAggregateInput;
}
