import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { FeedSourceOrderByWithRelationInput } from '../feed-source/feed-source-order-by-with-relation.input';

@InputType()
export class FeedSourcePreferenceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notifyOnNew?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isMuted?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    mutedUntil?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    consecutiveSkips?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    lastInteractedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => FeedSourceOrderByWithRelationInput, {nullable:true})
    source?: FeedSourceOrderByWithRelationInput;
}
