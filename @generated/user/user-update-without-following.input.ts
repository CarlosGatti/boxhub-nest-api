import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { CommunityUpdateManyWithoutOwnerNestedInput } from '../community/community-update-many-without-owner-nested.input';
import { CommunityMemberUpdateManyWithoutUserNestedInput } from '../community-member/community-member-update-many-without-user-nested.input';
import { EventUpdateManyWithoutOwnerNestedInput } from '../event/event-update-many-without-owner-nested.input';
import { EventMemberUpdateManyWithoutUserNestedInput } from '../event-member/event-member-update-many-without-user-nested.input';
import { EventTicketUpdateManyWithoutUserNestedInput } from '../event-ticket/event-ticket-update-many-without-user-nested.input';
import { FollowsUpdateManyWithoutFollowingNestedInput } from '../follows/follows-update-many-without-following-nested.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
import { PublicationUpdateManyWithoutUserNestedInput } from '../publication/publication-update-many-without-user-nested.input';
import { PublicationCommentUpdateManyWithoutUserNestedInput } from '../publication-comment/publication-comment-update-many-without-user-nested.input';
import { PublicationLikeUpdateManyWithoutUserNestedInput } from '../publication-like/publication-like-update-many-without-user-nested.input';
import { StorageMemberUpdateManyWithoutUserNestedInput } from '../storage-member/storage-member-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutFollowingInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nickname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    public?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    emailVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    about?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    linkedinUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    twitterUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    githubUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPremium?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subscriptionId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    willExpireAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => CommunityUpdateManyWithoutOwnerNestedInput, {nullable:true})
    adminCommunities?: CommunityUpdateManyWithoutOwnerNestedInput;

    @Field(() => CommunityMemberUpdateManyWithoutUserNestedInput, {nullable:true})
    memberCommunities?: CommunityMemberUpdateManyWithoutUserNestedInput;

    @Field(() => EventUpdateManyWithoutOwnerNestedInput, {nullable:true})
    events?: EventUpdateManyWithoutOwnerNestedInput;

    @Field(() => EventMemberUpdateManyWithoutUserNestedInput, {nullable:true})
    eventMember?: EventMemberUpdateManyWithoutUserNestedInput;

    @Field(() => EventTicketUpdateManyWithoutUserNestedInput, {nullable:true})
    eventTicket?: EventTicketUpdateManyWithoutUserNestedInput;

    @Field(() => FollowsUpdateManyWithoutFollowingNestedInput, {nullable:true})
    followers?: FollowsUpdateManyWithoutFollowingNestedInput;

    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorNestedInput;

    @Field(() => PublicationUpdateManyWithoutUserNestedInput, {nullable:true})
    publications?: PublicationUpdateManyWithoutUserNestedInput;

    @Field(() => PublicationCommentUpdateManyWithoutUserNestedInput, {nullable:true})
    allPublicationComments?: PublicationCommentUpdateManyWithoutUserNestedInput;

    @Field(() => PublicationLikeUpdateManyWithoutUserNestedInput, {nullable:true})
    allPublicationLikes?: PublicationLikeUpdateManyWithoutUserNestedInput;

    @Field(() => StorageMemberUpdateManyWithoutUserNestedInput, {nullable:true})
    storageMemberships?: StorageMemberUpdateManyWithoutUserNestedInput;
}
