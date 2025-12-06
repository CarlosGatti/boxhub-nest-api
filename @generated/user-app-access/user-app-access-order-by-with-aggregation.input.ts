import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserAppAccessCountOrderByAggregateInput } from './user-app-access-count-order-by-aggregate.input';
import { UserAppAccessAvgOrderByAggregateInput } from './user-app-access-avg-order-by-aggregate.input';
import { UserAppAccessMaxOrderByAggregateInput } from './user-app-access-max-order-by-aggregate.input';
import { UserAppAccessMinOrderByAggregateInput } from './user-app-access-min-order-by-aggregate.input';
import { UserAppAccessSumOrderByAggregateInput } from './user-app-access-sum-order-by-aggregate.input';

@InputType()
export class UserAppAccessOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserAppAccessCountOrderByAggregateInput, {nullable:true})
    _count?: UserAppAccessCountOrderByAggregateInput;

    @Field(() => UserAppAccessAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserAppAccessAvgOrderByAggregateInput;

    @Field(() => UserAppAccessMaxOrderByAggregateInput, {nullable:true})
    _max?: UserAppAccessMaxOrderByAggregateInput;

    @Field(() => UserAppAccessMinOrderByAggregateInput, {nullable:true})
    _min?: UserAppAccessMinOrderByAggregateInput;

    @Field(() => UserAppAccessSumOrderByAggregateInput, {nullable:true})
    _sum?: UserAppAccessSumOrderByAggregateInput;
}
