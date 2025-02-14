import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Int } from '@nestjs/graphql';
import { Community } from '../community/community.model';
import { CommunityMember } from '../community-member/community-member.model';
import { Event } from '../event/event.model';
import { EventMember } from '../event-member/event-member.model';
import { EventTicket } from '../event-ticket/event-ticket.model';
import { Follows } from '../follows/follows.model';
import { Post } from '../post/post.model';
import { Publication } from '../publication/publication.model';
import { PublicationComment } from '../publication-comment/publication-comment.model';
import { PublicationLike } from '../publication-like/publication-like.model';
import { Family } from '../family/family.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    nickname!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    public!: boolean;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    emailVerified!: boolean;

    @Field(() => String, {nullable:true})
    profilePicture!: string | null;

    @Field(() => String, {nullable:true})
    about!: string | null;

    @Field(() => String, {nullable:true})
    linkedinUrl!: string | null;

    @Field(() => String, {nullable:true})
    twitterUrl!: string | null;

    @Field(() => String, {nullable:true})
    githubUrl!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    familyId!: number | null;

    @Field(() => [Community], {nullable:true})
    adminCommunities?: Array<Community>;

    @Field(() => [CommunityMember], {nullable:true})
    memberCommunities?: Array<CommunityMember>;

    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;

    @Field(() => [EventMember], {nullable:true})
    eventMember?: Array<EventMember>;

    @Field(() => [EventTicket], {nullable:true})
    eventTicket?: Array<EventTicket>;

    @Field(() => [Follows], {nullable:true})
    following?: Array<Follows>;

    @Field(() => [Follows], {nullable:true})
    followers?: Array<Follows>;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Publication], {nullable:true})
    publications?: Array<Publication>;

    @Field(() => [PublicationComment], {nullable:true})
    allPublicationComments?: Array<PublicationComment>;

    @Field(() => [PublicationLike], {nullable:true})
    allPublicationLikes?: Array<PublicationLike>;

    @Field(() => Family, {nullable:true})
    family?: Family | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
