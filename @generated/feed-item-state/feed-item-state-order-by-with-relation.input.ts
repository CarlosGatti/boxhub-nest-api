import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { FeedItemOrderByWithRelationInput } from '../feed-item/feed-item-order-by-with-relation.input';

@InputType()
export class FeedItemStateOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    itemId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    readStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    saveStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    readAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    savedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    hiddenAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => FeedItemOrderByWithRelationInput, {nullable:true})
    item?: FeedItemOrderByWithRelationInput;
}
