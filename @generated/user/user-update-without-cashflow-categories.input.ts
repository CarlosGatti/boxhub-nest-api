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
import { DiscartItemUpdateManyWithoutCreatedByNestedInput } from '../discart-item/discart-item-update-many-without-created-by-nested.input';
import { CommentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';
import { RatingUpdateManyWithoutSellerNestedInput } from '../rating/rating-update-many-without-seller-nested.input';
import { RatingUpdateManyWithoutBuyerNestedInput } from '../rating/rating-update-many-without-buyer-nested.input';
import { UserAppAccessUpdateManyWithoutUserNestedInput } from '../user-app-access/user-app-access-update-many-without-user-nested.input';
import { FeedbackUpdateManyWithoutUserNestedInput } from '../feedback/feedback-update-many-without-user-nested.input';
import { HomeOpsHouseholdUpdateManyWithoutOwnerNestedInput } from '../home-ops-household/home-ops-household-update-many-without-owner-nested.input';
import { HomeOpsHouseholdMemberUpdateManyWithoutUserNestedInput } from '../home-ops-household-member/home-ops-household-member-update-many-without-user-nested.input';
import { HomeOpsTaskTemplateUpdateManyWithoutCreatedByNestedInput } from '../home-ops-task-template/home-ops-task-template-update-many-without-created-by-nested.input';
import { HomeOpsTaskTemplateUpdateManyWithoutFixedAssigneeNestedInput } from '../home-ops-task-template/home-ops-task-template-update-many-without-fixed-assignee-nested.input';
import { HomeOpsTaskInstanceUpdateManyWithoutAssigneeNestedInput } from '../home-ops-task-instance/home-ops-task-instance-update-many-without-assignee-nested.input';
import { HomeOpsTaskInstanceUpdateManyWithoutCompletedByNestedInput } from '../home-ops-task-instance/home-ops-task-instance-update-many-without-completed-by-nested.input';
import { HomeOpsWorkloadLedgerUpdateManyWithoutUserNestedInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-update-many-without-user-nested.input';
import { FeedProfileUpdateOneWithoutUserNestedInput } from '../feed-profile/feed-profile-update-one-without-user-nested.input';
import { FeedItemStateUpdateManyWithoutUserNestedInput } from '../feed-item-state/feed-item-state-update-many-without-user-nested.input';
import { PortfolioUpdateManyWithoutUserNestedInput } from '../portfolio/portfolio-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { CashflowEntryUpdateManyWithoutUserNestedInput } from '../cashflow-entry/cashflow-entry-update-many-without-user-nested.input';
import { RecurringCashflowUpdateManyWithoutUserNestedInput } from '../recurring-cashflow/recurring-cashflow-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutCashflowCategoriesInput {

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
    contactPhone?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => DiscartItemUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    discartItems?: DiscartItemUpdateManyWithoutCreatedByNestedInput;

    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutUserNestedInput;

    @Field(() => RatingUpdateManyWithoutSellerNestedInput, {nullable:true})
    ratingsAsSeller?: RatingUpdateManyWithoutSellerNestedInput;

    @Field(() => RatingUpdateManyWithoutBuyerNestedInput, {nullable:true})
    ratingsAsBuyer?: RatingUpdateManyWithoutBuyerNestedInput;

    @Field(() => UserAppAccessUpdateManyWithoutUserNestedInput, {nullable:true})
    apps?: UserAppAccessUpdateManyWithoutUserNestedInput;

    @Field(() => FeedbackUpdateManyWithoutUserNestedInput, {nullable:true})
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput;

    @Field(() => HomeOpsHouseholdUpdateManyWithoutOwnerNestedInput, {nullable:true})
    homeOpsHouseholdsOwned?: HomeOpsHouseholdUpdateManyWithoutOwnerNestedInput;

    @Field(() => HomeOpsHouseholdMemberUpdateManyWithoutUserNestedInput, {nullable:true})
    homeOpsHouseholdMemberships?: HomeOpsHouseholdMemberUpdateManyWithoutUserNestedInput;

    @Field(() => HomeOpsTaskTemplateUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    homeOpsTaskTemplatesCreated?: HomeOpsTaskTemplateUpdateManyWithoutCreatedByNestedInput;

    @Field(() => HomeOpsTaskTemplateUpdateManyWithoutFixedAssigneeNestedInput, {nullable:true})
    homeOpsTaskTemplatesAssigned?: HomeOpsTaskTemplateUpdateManyWithoutFixedAssigneeNestedInput;

    @Field(() => HomeOpsTaskInstanceUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    homeOpsTaskInstancesAssigned?: HomeOpsTaskInstanceUpdateManyWithoutAssigneeNestedInput;

    @Field(() => HomeOpsTaskInstanceUpdateManyWithoutCompletedByNestedInput, {nullable:true})
    homeOpsTaskInstancesCompleted?: HomeOpsTaskInstanceUpdateManyWithoutCompletedByNestedInput;

    @Field(() => HomeOpsWorkloadLedgerUpdateManyWithoutUserNestedInput, {nullable:true})
    homeOpsWorkloadLedgers?: HomeOpsWorkloadLedgerUpdateManyWithoutUserNestedInput;

    @Field(() => FeedProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    feedProfile?: FeedProfileUpdateOneWithoutUserNestedInput;

    @Field(() => FeedItemStateUpdateManyWithoutUserNestedInput, {nullable:true})
    feedItemStates?: FeedItemStateUpdateManyWithoutUserNestedInput;

    @Field(() => PortfolioUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => PortfolioUpdateManyWithoutUserNestedInput)
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput;

    @Field(() => CashflowEntryUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => CashflowEntryUpdateManyWithoutUserNestedInput)
    cashflowEntries?: CashflowEntryUpdateManyWithoutUserNestedInput;

    @Field(() => RecurringCashflowUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => RecurringCashflowUpdateManyWithoutUserNestedInput)
    recurringCashflows?: RecurringCashflowUpdateManyWithoutUserNestedInput;
}
