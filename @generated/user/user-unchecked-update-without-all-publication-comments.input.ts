import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { CommunityUncheckedUpdateManyWithoutOwnerNestedInput } from '../community/community-unchecked-update-many-without-owner-nested.input';
import { CommunityMemberUncheckedUpdateManyWithoutUserNestedInput } from '../community-member/community-member-unchecked-update-many-without-user-nested.input';
import { EventUncheckedUpdateManyWithoutOwnerNestedInput } from '../event/event-unchecked-update-many-without-owner-nested.input';
import { EventMemberUncheckedUpdateManyWithoutUserNestedInput } from '../event-member/event-member-unchecked-update-many-without-user-nested.input';
import { EventTicketUncheckedUpdateManyWithoutUserNestedInput } from '../event-ticket/event-ticket-unchecked-update-many-without-user-nested.input';
import { FollowsUncheckedUpdateManyWithoutFollowerNestedInput } from '../follows/follows-unchecked-update-many-without-follower-nested.input';
import { FollowsUncheckedUpdateManyWithoutFollowingNestedInput } from '../follows/follows-unchecked-update-many-without-following-nested.input';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';
import { PublicationUncheckedUpdateManyWithoutUserNestedInput } from '../publication/publication-unchecked-update-many-without-user-nested.input';
import { PublicationLikeUncheckedUpdateManyWithoutUserNestedInput } from '../publication-like/publication-like-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutAllPublicationCommentsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    familyId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => CommunityUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    adminCommunities?: CommunityUncheckedUpdateManyWithoutOwnerNestedInput;

    @Field(() => CommunityMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    memberCommunities?: CommunityMemberUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => EventUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput;

    @Field(() => EventMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    eventMember?: EventMemberUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => EventTicketUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    eventTicket?: EventTicketUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FollowsUncheckedUpdateManyWithoutFollowerNestedInput, {nullable:true})
    following?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput;

    @Field(() => FollowsUncheckedUpdateManyWithoutFollowingNestedInput, {nullable:true})
    followers?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => PublicationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    publications?: PublicationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PublicationLikeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    allPublicationLikes?: PublicationLikeUncheckedUpdateManyWithoutUserNestedInput;
}
