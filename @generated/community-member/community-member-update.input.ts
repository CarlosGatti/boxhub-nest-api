import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMembershipStatusFieldUpdateOperationsInput } from '../prisma/enum-membership-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumCommunityMemberRoleFieldUpdateOperationsInput } from '../prisma/enum-community-member-role-field-update-operations.input';
import { CommunityUpdateOneRequiredWithoutMembersNestedInput } from '../community/community-update-one-required-without-members-nested.input';
import { UserUpdateOneWithoutMemberCommunitiesNestedInput } from '../user/user-update-one-without-member-communities-nested.input';

@InputType()
export class CommunityMemberUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumMembershipStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumMembershipStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    leftAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumCommunityMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCommunityMemberRoleFieldUpdateOperationsInput;

    @Field(() => CommunityUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    community?: CommunityUpdateOneRequiredWithoutMembersNestedInput;

    @Field(() => UserUpdateOneWithoutMemberCommunitiesNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutMemberCommunitiesNestedInput;
}
