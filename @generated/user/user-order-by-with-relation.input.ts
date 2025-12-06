import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { StorageMemberOrderByRelationAggregateInput } from '../storage-member/storage-member-order-by-relation-aggregate.input';
import { LogOrderByRelationAggregateInput } from '../log/log-order-by-relation-aggregate.input';
import { DiscartItemOrderByRelationAggregateInput } from '../discart-item/discart-item-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { RatingOrderByRelationAggregateInput } from '../rating/rating-order-by-relation-aggregate.input';
import { UserAppAccessOrderByRelationAggregateInput } from '../user-app-access/user-app-access-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    nickname?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    public?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    profilePicture?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    about?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contactPhone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPremium?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subscriptionId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    expiresAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    willExpireAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    apartment?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isApprovedResident?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAdmin?: keyof typeof SortOrder;

    @Field(() => StorageMemberOrderByRelationAggregateInput, {nullable:true})
    storageMemberships?: StorageMemberOrderByRelationAggregateInput;

    @Field(() => LogOrderByRelationAggregateInput, {nullable:true})
    logs?: LogOrderByRelationAggregateInput;

    @Field(() => DiscartItemOrderByRelationAggregateInput, {nullable:true})
    discartItems?: DiscartItemOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => RatingOrderByRelationAggregateInput, {nullable:true})
    ratingsAsSeller?: RatingOrderByRelationAggregateInput;

    @Field(() => RatingOrderByRelationAggregateInput, {nullable:true})
    ratingsAsBuyer?: RatingOrderByRelationAggregateInput;

    @Field(() => UserAppAccessOrderByRelationAggregateInput, {nullable:true})
    apps?: UserAppAccessOrderByRelationAggregateInput;
}
