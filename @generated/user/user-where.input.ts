import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CommunityListRelationFilter } from '../community/community-list-relation-filter.input';
import { CommunityMemberListRelationFilter } from '../community-member/community-member-list-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';
import { EventMemberListRelationFilter } from '../event-member/event-member-list-relation-filter.input';
import { EventTicketListRelationFilter } from '../event-ticket/event-ticket-list-relation-filter.input';
import { FollowsListRelationFilter } from '../follows/follows-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { PublicationListRelationFilter } from '../publication/publication-list-relation-filter.input';
import { PublicationCommentListRelationFilter } from '../publication-comment/publication-comment-list-relation-filter.input';
import { PublicationLikeListRelationFilter } from '../publication-like/publication-like-list-relation-filter.input';
import { StorageMemberListRelationFilter } from '../storage-member/storage-member-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickname?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    public?: BoolFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    emailVerified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profilePicture?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    about?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    linkedinUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    twitterUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    githubUrl?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPremium?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subscriptionId?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    willExpireAt?: DateTimeNullableFilter;

    @Field(() => CommunityListRelationFilter, {nullable:true})
    adminCommunities?: CommunityListRelationFilter;

    @Field(() => CommunityMemberListRelationFilter, {nullable:true})
    memberCommunities?: CommunityMemberListRelationFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    events?: EventListRelationFilter;

    @Field(() => EventMemberListRelationFilter, {nullable:true})
    eventMember?: EventMemberListRelationFilter;

    @Field(() => EventTicketListRelationFilter, {nullable:true})
    eventTicket?: EventTicketListRelationFilter;

    @Field(() => FollowsListRelationFilter, {nullable:true})
    following?: FollowsListRelationFilter;

    @Field(() => FollowsListRelationFilter, {nullable:true})
    followers?: FollowsListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => PublicationListRelationFilter, {nullable:true})
    publications?: PublicationListRelationFilter;

    @Field(() => PublicationCommentListRelationFilter, {nullable:true})
    allPublicationComments?: PublicationCommentListRelationFilter;

    @Field(() => PublicationLikeListRelationFilter, {nullable:true})
    allPublicationLikes?: PublicationLikeListRelationFilter;

    @Field(() => StorageMemberListRelationFilter, {nullable:true})
    storageMemberships?: StorageMemberListRelationFilter;
}
