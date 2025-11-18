import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { StorageMemberUpdateManyWithoutUserNestedInput } from '../storage-member/storage-member-update-many-without-user-nested.input';
import { LogUpdateManyWithoutUserNestedInput } from '../log/log-update-many-without-user-nested.input';
import { ProjectUpdateManyWithoutResponsibleNestedInput } from '../project/project-update-many-without-responsible-nested.input';
import { LogCommentUpdateManyWithoutUserNestedInput } from '../log-comment/log-comment-update-many-without-user-nested.input';
import { LogCommentReplyUpdateManyWithoutUserNestedInput } from '../log-comment-reply/log-comment-reply-update-many-without-user-nested.input';
import { PermitInspectionUpdateManyWithoutResponsibleNestedInput } from '../permit-inspection/permit-inspection-update-many-without-responsible-nested.input';
import { MaterialEntryUpdateManyWithoutReceivedByNestedInput } from '../material-entry/material-entry-update-many-without-received-by-nested.input';
import { DiscartItemUpdateManyWithoutCreatedByNestedInput } from '../discart-item/discart-item-update-many-without-created-by-nested.input';

@InputType()
export class UserUpdateWithoutConstructionLogsInput {

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

    @Field(() => StorageMemberUpdateManyWithoutUserNestedInput, {nullable:true})
    storageMemberships?: StorageMemberUpdateManyWithoutUserNestedInput;

    @Field(() => LogUpdateManyWithoutUserNestedInput, {nullable:true})
    logs?: LogUpdateManyWithoutUserNestedInput;

    @Field(() => ProjectUpdateManyWithoutResponsibleNestedInput, {nullable:true})
    projectResponsible?: ProjectUpdateManyWithoutResponsibleNestedInput;

    @Field(() => LogCommentUpdateManyWithoutUserNestedInput, {nullable:true})
    logComments?: LogCommentUpdateManyWithoutUserNestedInput;

    @Field(() => LogCommentReplyUpdateManyWithoutUserNestedInput, {nullable:true})
    logCommentReplies?: LogCommentReplyUpdateManyWithoutUserNestedInput;

    @Field(() => PermitInspectionUpdateManyWithoutResponsibleNestedInput, {nullable:true})
    responsibleInspections?: PermitInspectionUpdateManyWithoutResponsibleNestedInput;

    @Field(() => MaterialEntryUpdateManyWithoutReceivedByNestedInput, {nullable:true})
    receivedMaterials?: MaterialEntryUpdateManyWithoutReceivedByNestedInput;

    @Field(() => DiscartItemUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    discartItems?: DiscartItemUpdateManyWithoutCreatedByNestedInput;
}
