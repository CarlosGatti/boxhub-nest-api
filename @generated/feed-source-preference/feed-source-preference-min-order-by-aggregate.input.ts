import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FeedSourcePreferenceMinOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    mutedUntil?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    consecutiveSkips?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastInteractedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
