import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FeedItemStateCountOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    openedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skippedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skipCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actionCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastAction?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    readAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    savedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hiddenAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
