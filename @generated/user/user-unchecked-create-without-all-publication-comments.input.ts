import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { CommunityUncheckedCreateNestedManyWithoutOwnerInput } from '../community/community-unchecked-create-nested-many-without-owner.input';
import { CommunityMemberUncheckedCreateNestedManyWithoutUserInput } from '../community-member/community-member-unchecked-create-nested-many-without-user.input';
import { EventUncheckedCreateNestedManyWithoutOwnerInput } from '../event/event-unchecked-create-nested-many-without-owner.input';
import { EventMemberUncheckedCreateNestedManyWithoutUserInput } from '../event-member/event-member-unchecked-create-nested-many-without-user.input';
import { EventTicketUncheckedCreateNestedManyWithoutUserInput } from '../event-ticket/event-ticket-unchecked-create-nested-many-without-user.input';
import { FollowsUncheckedCreateNestedManyWithoutFollowerInput } from '../follows/follows-unchecked-create-nested-many-without-follower.input';
import { FollowsUncheckedCreateNestedManyWithoutFollowingInput } from '../follows/follows-unchecked-create-nested-many-without-following.input';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { PublicationUncheckedCreateNestedManyWithoutUserInput } from '../publication/publication-unchecked-create-nested-many-without-user.input';
import { PublicationLikeUncheckedCreateNestedManyWithoutUserInput } from '../publication-like/publication-like-unchecked-create-nested-many-without-user.input';
import { StorageMemberUncheckedCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutAllPublicationCommentsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => CommunityUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    adminCommunities?: CommunityUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => CommunityMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    memberCommunities?: CommunityMemberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => EventUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => EventMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    eventMember?: EventMemberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => EventTicketUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    eventTicket?: EventTicketUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FollowsUncheckedCreateNestedManyWithoutFollowerInput, {nullable:true})
    following?: FollowsUncheckedCreateNestedManyWithoutFollowerInput;

    @Field(() => FollowsUncheckedCreateNestedManyWithoutFollowingInput, {nullable:true})
    followers?: FollowsUncheckedCreateNestedManyWithoutFollowingInput;

    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => PublicationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    publications?: PublicationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PublicationLikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    allPublicationLikes?: PublicationLikeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => StorageMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    storageMemberships?: StorageMemberUncheckedCreateNestedManyWithoutUserInput;
}
