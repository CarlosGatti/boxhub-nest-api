import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RatingSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buyerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stars?: keyof typeof SortOrder;
}
