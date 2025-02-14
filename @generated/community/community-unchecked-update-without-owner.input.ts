import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumCommunityPrivacyFieldUpdateOperationsInput } from '../prisma/enum-community-privacy-field-update-operations.input';
import { CommunityUncheckedUpdateManyWithoutParentCommunityNestedInput } from './community-unchecked-update-many-without-parent-community-nested.input';
import { CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput } from '../community-member/community-member-unchecked-update-many-without-community-nested.input';
import { EventUncheckedUpdateManyWithoutCommunityNestedInput } from '../event/event-unchecked-update-many-without-community-nested.input';
import { FacetUncheckedUpdateManyWithoutCommunityNestedInput } from '../facet/facet-unchecked-update-many-without-community-nested.input';
import { PublicationUncheckedUpdateManyWithoutCommunityNestedInput } from '../publication/publication-unchecked-update-many-without-community-nested.input';

@InputType()
export class CommunityUncheckedUpdateWithoutOwnerInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    communityPlanId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumCommunityPrivacyFieldUpdateOperationsInput, {nullable:true})
    postEnabledRole?: EnumCommunityPrivacyFieldUpdateOperationsInput;

    @Field(() => EnumCommunityPrivacyFieldUpdateOperationsInput, {nullable:true})
    inviteEnabledRole?: EnumCommunityPrivacyFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentCommunityId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => CommunityUncheckedUpdateManyWithoutParentCommunityNestedInput, {nullable:true})
    groups?: CommunityUncheckedUpdateManyWithoutParentCommunityNestedInput;

    @Field(() => CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput, {nullable:true})
    members?: CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput;

    @Field(() => EventUncheckedUpdateManyWithoutCommunityNestedInput, {nullable:true})
    events?: EventUncheckedUpdateManyWithoutCommunityNestedInput;

    @Field(() => FacetUncheckedUpdateManyWithoutCommunityNestedInput, {nullable:true})
    facets?: FacetUncheckedUpdateManyWithoutCommunityNestedInput;

    @Field(() => PublicationUncheckedUpdateManyWithoutCommunityNestedInput, {nullable:true})
    publications?: PublicationUncheckedUpdateManyWithoutCommunityNestedInput;
}
