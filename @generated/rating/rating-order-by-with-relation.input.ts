import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class RatingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buyerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stars?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    comment?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    seller?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    buyer?: UserOrderByWithRelationInput;
}
