import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FeedSourceSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collectionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fetchEveryMin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    failureCount?: keyof typeof SortOrder;
}
