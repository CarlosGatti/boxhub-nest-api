import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { CommunityCreateNestedManyWithoutOwnerInput } from '../community/community-create-nested-many-without-owner.input';
import { CommunityMemberCreateNestedManyWithoutUserInput } from '../community-member/community-member-create-nested-many-without-user.input';
import { EventCreateNestedManyWithoutOwnerInput } from '../event/event-create-nested-many-without-owner.input';
import { EventMemberCreateNestedManyWithoutUserInput } from '../event-member/event-member-create-nested-many-without-user.input';
import { EventTicketCreateNestedManyWithoutUserInput } from '../event-ticket/event-ticket-create-nested-many-without-user.input';
import { FollowsCreateNestedManyWithoutFollowingInput } from '../follows/follows-create-nested-many-without-following.input';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { PublicationCreateNestedManyWithoutUserInput } from '../publication/publication-create-nested-many-without-user.input';
import { PublicationCommentCreateNestedManyWithoutUserInput } from '../publication-comment/publication-comment-create-nested-many-without-user.input';
import { PublicationLikeCreateNestedManyWithoutUserInput } from '../publication-like/publication-like-create-nested-many-without-user.input';
import { StorageMemberCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-create-nested-many-without-user.input';
import { LogCreateNestedManyWithoutUserInput } from '../log/log-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutFollowingInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    nickname?: string;

    @Field(() => Boolean, {nullable:true})
    public?: boolean;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: boolean;

    @Field(() => String, {nullable:true})
    profilePicture?: string;

    @Field(() => String, {nullable:true})
    about?: string;

    @Field(() => String, {nullable:true})
    linkedinUrl?: string;

    @Field(() => String, {nullable:true})
    twitterUrl?: string;

    @Field(() => String, {nullable:true})
    githubUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isPremium?: boolean;

    @Field(() => String, {nullable:true})
    subscriptionId?: string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    willExpireAt?: Date | string;

    @Field(() => CommunityCreateNestedManyWithoutOwnerInput, {nullable:true})
    adminCommunities?: CommunityCreateNestedManyWithoutOwnerInput;

    @Field(() => CommunityMemberCreateNestedManyWithoutUserInput, {nullable:true})
    memberCommunities?: CommunityMemberCreateNestedManyWithoutUserInput;

    @Field(() => EventCreateNestedManyWithoutOwnerInput, {nullable:true})
    events?: EventCreateNestedManyWithoutOwnerInput;

    @Field(() => EventMemberCreateNestedManyWithoutUserInput, {nullable:true})
    eventMember?: EventMemberCreateNestedManyWithoutUserInput;

    @Field(() => EventTicketCreateNestedManyWithoutUserInput, {nullable:true})
    eventTicket?: EventTicketCreateNestedManyWithoutUserInput;

    @Field(() => FollowsCreateNestedManyWithoutFollowingInput, {nullable:true})
    followers?: FollowsCreateNestedManyWithoutFollowingInput;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;

    @Field(() => PublicationCreateNestedManyWithoutUserInput, {nullable:true})
    publications?: PublicationCreateNestedManyWithoutUserInput;

    @Field(() => PublicationCommentCreateNestedManyWithoutUserInput, {nullable:true})
    allPublicationComments?: PublicationCommentCreateNestedManyWithoutUserInput;

    @Field(() => PublicationLikeCreateNestedManyWithoutUserInput, {nullable:true})
    allPublicationLikes?: PublicationLikeCreateNestedManyWithoutUserInput;

    @Field(() => StorageMemberCreateNestedManyWithoutUserInput, {nullable:true})
    storageMemberships?: StorageMemberCreateNestedManyWithoutUserInput;

    @Field(() => LogCreateNestedManyWithoutUserInput, {nullable:true})
    logs?: LogCreateNestedManyWithoutUserInput;
}
