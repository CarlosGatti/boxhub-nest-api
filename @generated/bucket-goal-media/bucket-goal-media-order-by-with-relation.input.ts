import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketGoalOrderByWithRelationInput } from '../bucket-goal/bucket-goal-order-by-with-relation.input';
import { BucketGoalLogOrderByWithRelationInput } from '../bucket-goal-log/bucket-goal-log-order-by-with-relation.input';

@InputType()
export class BucketGoalMediaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    goalId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    logId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketGoalOrderByWithRelationInput, {nullable:true})
    goal?: BucketGoalOrderByWithRelationInput;

    @Field(() => BucketGoalLogOrderByWithRelationInput, {nullable:true})
    log?: BucketGoalLogOrderByWithRelationInput;
}
