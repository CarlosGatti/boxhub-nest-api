import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { StorageMemberUncheckedUpdateManyWithoutUserNestedInput } from '../storage-member/storage-member-unchecked-update-many-without-user-nested.input';
import { ProjectUncheckedUpdateManyWithoutResponsibleNestedInput } from '../project/project-unchecked-update-many-without-responsible-nested.input';
import { ConstructionLogUncheckedUpdateManyWithoutUserNestedInput } from '../construction-log/construction-log-unchecked-update-many-without-user-nested.input';
import { LogCommentUncheckedUpdateManyWithoutUserNestedInput } from '../log-comment/log-comment-unchecked-update-many-without-user-nested.input';
import { LogCommentReplyUncheckedUpdateManyWithoutUserNestedInput } from '../log-comment-reply/log-comment-reply-unchecked-update-many-without-user-nested.input';
import { PermitInspectionUncheckedUpdateManyWithoutResponsibleNestedInput } from '../permit-inspection/permit-inspection-unchecked-update-many-without-responsible-nested.input';
import { MaterialEntryUncheckedUpdateManyWithoutReceivedByNestedInput } from '../material-entry/material-entry-unchecked-update-many-without-received-by-nested.input';
import { DiscartItemUncheckedUpdateManyWithoutCreatedByNestedInput } from '../discart-item/discart-item-unchecked-update-many-without-created-by-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutLogsInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    apartment?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isApprovedResident?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: BoolFieldUpdateOperationsInput;

    @Field(() => StorageMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    storageMemberships?: StorageMemberUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ProjectUncheckedUpdateManyWithoutResponsibleNestedInput, {nullable:true})
    projectResponsible?: ProjectUncheckedUpdateManyWithoutResponsibleNestedInput;

    @Field(() => ConstructionLogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    constructionLogs?: ConstructionLogUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => LogCommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    logComments?: LogCommentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => LogCommentReplyUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    logCommentReplies?: LogCommentReplyUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PermitInspectionUncheckedUpdateManyWithoutResponsibleNestedInput, {nullable:true})
    responsibleInspections?: PermitInspectionUncheckedUpdateManyWithoutResponsibleNestedInput;

    @Field(() => MaterialEntryUncheckedUpdateManyWithoutReceivedByNestedInput, {nullable:true})
    receivedMaterials?: MaterialEntryUncheckedUpdateManyWithoutReceivedByNestedInput;

    @Field(() => DiscartItemUncheckedUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    discartItems?: DiscartItemUncheckedUpdateManyWithoutCreatedByNestedInput;
}
