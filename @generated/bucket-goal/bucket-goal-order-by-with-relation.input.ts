import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { BucketGoalLogOrderByRelationAggregateInput } from '../bucket-goal-log/bucket-goal-log-order-by-relation-aggregate.input';
import { BucketGoalPinOrderByRelationAggregateInput } from '../bucket-goal-pin/bucket-goal-pin-order-by-relation-aggregate.input';
import { BucketGoalMediaOrderByRelationAggregateInput } from '../bucket-goal-media/bucket-goal-media-order-by-relation-aggregate.input';
import { BucketVisionGoalLinkOrderByRelationAggregateInput } from '../bucket-vision-goal-link/bucket-vision-goal-link-order-by-relation-aggregate.input';

@InputType()
export class BucketGoalOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priority?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    details?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    detailsSchemaVersion?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    coverUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    targetDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => BucketGoalLogOrderByRelationAggregateInput, {nullable:true})
    logs?: BucketGoalLogOrderByRelationAggregateInput;

    @Field(() => BucketGoalPinOrderByRelationAggregateInput, {nullable:true})
    pins?: BucketGoalPinOrderByRelationAggregateInput;

    @Field(() => BucketGoalMediaOrderByRelationAggregateInput, {nullable:true})
    media?: BucketGoalMediaOrderByRelationAggregateInput;

    @Field(() => BucketVisionGoalLinkOrderByRelationAggregateInput, {nullable:true})
    bucketVisionGoalLinks?: BucketVisionGoalLinkOrderByRelationAggregateInput;
}
