import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionOrderByRelationAggregateInput } from '../bucket-vision-section/bucket-vision-section-order-by-relation-aggregate.input';
import { BucketVisionItemOrderByRelationAggregateInput } from '../bucket-vision-item/bucket-vision-item-order-by-relation-aggregate.input';
import { BucketVisionGoalLinkOrderByRelationAggregateInput } from '../bucket-vision-goal-link/bucket-vision-goal-link-order-by-relation-aggregate.input';
import { BucketVisionCheckinOrderByRelationAggregateInput } from '../bucket-vision-checkin/bucket-vision-checkin-order-by-relation-aggregate.input';

@InputType()
export class BucketVisionBoardOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    year?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    periodKey?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    startDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    endDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    theme?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    layoutMode?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    coverUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => BucketVisionSectionOrderByRelationAggregateInput, {nullable:true})
    sections?: BucketVisionSectionOrderByRelationAggregateInput;

    @Field(() => BucketVisionItemOrderByRelationAggregateInput, {nullable:true})
    items?: BucketVisionItemOrderByRelationAggregateInput;

    @Field(() => BucketVisionGoalLinkOrderByRelationAggregateInput, {nullable:true})
    goalLinks?: BucketVisionGoalLinkOrderByRelationAggregateInput;

    @Field(() => BucketVisionCheckinOrderByRelationAggregateInput, {nullable:true})
    checkins?: BucketVisionCheckinOrderByRelationAggregateInput;
}
