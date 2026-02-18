import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BucketGoalOrderByWithRelationInput } from '../bucket-goal/bucket-goal-order-by-with-relation.input';
import { BucketGoalMediaOrderByRelationAggregateInput } from '../bucket-goal-media/bucket-goal-media-order-by-relation-aggregate.input';

@InputType()
export class BucketGoalLogOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    happenedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketGoalOrderByWithRelationInput, {nullable:true})
    goal?: BucketGoalOrderByWithRelationInput;

    @Field(() => BucketGoalMediaOrderByRelationAggregateInput, {nullable:true})
    media?: BucketGoalMediaOrderByRelationAggregateInput;
}
