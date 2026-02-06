import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectOrderByRelationAggregateInput } from '../review-card-project/review-card-project-order-by-relation-aggregate.input';

@InputType()
export class ReviewCardBusinessOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    placeId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    googleReviewUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => ReviewCardProjectOrderByRelationAggregateInput, {nullable:true})
    projects?: ReviewCardProjectOrderByRelationAggregateInput;
}
