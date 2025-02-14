import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumCommunityPrivacyFieldUpdateOperationsInput } from '../prisma/enum-community-privacy-field-update-operations.input';
import { CommunityPlanUpdateOneWithoutCommunityNestedInput } from '../community-plan/community-plan-update-one-without-community-nested.input';
import { UserUpdateOneWithoutAdminCommunitiesNestedInput } from '../user/user-update-one-without-admin-communities-nested.input';
import { CommunityUpdateOneWithoutGroupsNestedInput } from './community-update-one-without-groups-nested.input';
import { CommunityUpdateManyWithoutParentCommunityNestedInput } from './community-update-many-without-parent-community-nested.input';
import { EventUpdateManyWithoutCommunityNestedInput } from '../event/event-update-many-without-community-nested.input';
import { FacetUpdateManyWithoutCommunityNestedInput } from '../facet/facet-update-many-without-community-nested.input';
import { PublicationUpdateManyWithoutCommunityNestedInput } from '../publication/publication-update-many-without-community-nested.input';

@InputType()
export class CommunityUpdateWithoutMembersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumVisibilityFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    published?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumCommunityPrivacyFieldUpdateOperationsInput, {nullable:true})
    postEnabledRole?: EnumCommunityPrivacyFieldUpdateOperationsInput;

    @Field(() => EnumCommunityPrivacyFieldUpdateOperationsInput, {nullable:true})
    inviteEnabledRole?: EnumCommunityPrivacyFieldUpdateOperationsInput;

    @Field(() => CommunityPlanUpdateOneWithoutCommunityNestedInput, {nullable:true})
    plan?: CommunityPlanUpdateOneWithoutCommunityNestedInput;

    @Field(() => UserUpdateOneWithoutAdminCommunitiesNestedInput, {nullable:true})
    owner?: UserUpdateOneWithoutAdminCommunitiesNestedInput;

    @Field(() => CommunityUpdateOneWithoutGroupsNestedInput, {nullable:true})
    parentCommunity?: CommunityUpdateOneWithoutGroupsNestedInput;

    @Field(() => CommunityUpdateManyWithoutParentCommunityNestedInput, {nullable:true})
    groups?: CommunityUpdateManyWithoutParentCommunityNestedInput;

    @Field(() => EventUpdateManyWithoutCommunityNestedInput, {nullable:true})
    events?: EventUpdateManyWithoutCommunityNestedInput;

    @Field(() => FacetUpdateManyWithoutCommunityNestedInput, {nullable:true})
    facets?: FacetUpdateManyWithoutCommunityNestedInput;

    @Field(() => PublicationUpdateManyWithoutCommunityNestedInput, {nullable:true})
    publications?: PublicationUpdateManyWithoutCommunityNestedInput;
}
