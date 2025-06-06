import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { StorageMemberOrderByRelationAggregateInput } from '../storage-member/storage-member-order-by-relation-aggregate.input';
import { LogOrderByRelationAggregateInput } from '../log/log-order-by-relation-aggregate.input';

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
    linkedinUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    twitterUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    githubUrl?: SortOrderInput;

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

    @Field(() => StorageMemberOrderByRelationAggregateInput, {nullable:true})
    storageMemberships?: StorageMemberOrderByRelationAggregateInput;

    @Field(() => LogOrderByRelationAggregateInput, {nullable:true})
    logs?: LogOrderByRelationAggregateInput;
}
