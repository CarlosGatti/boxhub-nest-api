import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { FeedItemOrderByWithRelationInput } from '../feed-item/feed-item-order-by-with-relation.input';
import { FeedSourceOrderByWithRelationInput } from '../feed-source/feed-source-order-by-with-relation.input';

@InputType()
export class FeedEventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    itemId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => FeedItemOrderByWithRelationInput, {nullable:true})
    item?: FeedItemOrderByWithRelationInput;

    @Field(() => FeedSourceOrderByWithRelationInput, {nullable:true})
    source?: FeedSourceOrderByWithRelationInput;
}
