import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunityOrderByRelationAggregateInput } from '../community/community-order-by-relation-aggregate.input';
import { CommunityMemberOrderByRelationAggregateInput } from '../community-member/community-member-order-by-relation-aggregate.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';
import { EventMemberOrderByRelationAggregateInput } from '../event-member/event-member-order-by-relation-aggregate.input';
import { EventTicketOrderByRelationAggregateInput } from '../event-ticket/event-ticket-order-by-relation-aggregate.input';
import { FollowsOrderByRelationAggregateInput } from '../follows/follows-order-by-relation-aggregate.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { PublicationOrderByRelationAggregateInput } from '../publication/publication-order-by-relation-aggregate.input';
import { PublicationCommentOrderByRelationAggregateInput } from '../publication-comment/publication-comment-order-by-relation-aggregate.input';
import { PublicationLikeOrderByRelationAggregateInput } from '../publication-like/publication-like-order-by-relation-aggregate.input';
import { StorageMemberOrderByRelationAggregateInput } from '../storage-member/storage-member-order-by-relation-aggregate.input';

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

    @Field(() => CommunityOrderByRelationAggregateInput, {nullable:true})
    adminCommunities?: CommunityOrderByRelationAggregateInput;

    @Field(() => CommunityMemberOrderByRelationAggregateInput, {nullable:true})
    memberCommunities?: CommunityMemberOrderByRelationAggregateInput;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    events?: EventOrderByRelationAggregateInput;

    @Field(() => EventMemberOrderByRelationAggregateInput, {nullable:true})
    eventMember?: EventMemberOrderByRelationAggregateInput;

    @Field(() => EventTicketOrderByRelationAggregateInput, {nullable:true})
    eventTicket?: EventTicketOrderByRelationAggregateInput;

    @Field(() => FollowsOrderByRelationAggregateInput, {nullable:true})
    following?: FollowsOrderByRelationAggregateInput;

    @Field(() => FollowsOrderByRelationAggregateInput, {nullable:true})
    followers?: FollowsOrderByRelationAggregateInput;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;

    @Field(() => PublicationOrderByRelationAggregateInput, {nullable:true})
    publications?: PublicationOrderByRelationAggregateInput;

    @Field(() => PublicationCommentOrderByRelationAggregateInput, {nullable:true})
    allPublicationComments?: PublicationCommentOrderByRelationAggregateInput;

    @Field(() => PublicationLikeOrderByRelationAggregateInput, {nullable:true})
    allPublicationLikes?: PublicationLikeOrderByRelationAggregateInput;

    @Field(() => StorageMemberOrderByRelationAggregateInput, {nullable:true})
    storageMemberships?: StorageMemberOrderByRelationAggregateInput;
}
