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
import { LogUncheckedUpdateManyWithoutUserNestedInput } from '../log/log-unchecked-update-many-without-user-nested.input';
import { DiscartItemUncheckedUpdateManyWithoutCreatedByNestedInput } from '../discart-item/discart-item-unchecked-update-many-without-created-by-nested.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { RatingUncheckedUpdateManyWithoutSellerNestedInput } from '../rating/rating-unchecked-update-many-without-seller-nested.input';
import { RatingUncheckedUpdateManyWithoutBuyerNestedInput } from '../rating/rating-unchecked-update-many-without-buyer-nested.input';
import { UserAppAccessUncheckedUpdateManyWithoutUserNestedInput } from '../user-app-access/user-app-access-unchecked-update-many-without-user-nested.input';
import { FeedbackUncheckedUpdateManyWithoutUserNestedInput } from '../feedback/feedback-unchecked-update-many-without-user-nested.input';
import { HomeOpsHouseholdUncheckedUpdateManyWithoutOwnerNestedInput } from '../home-ops-household/home-ops-household-unchecked-update-many-without-owner-nested.input';
import { HomeOpsHouseholdMemberUncheckedUpdateManyWithoutUserNestedInput } from '../home-ops-household-member/home-ops-household-member-unchecked-update-many-without-user-nested.input';
import { HomeOpsTaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput } from '../home-ops-task-template/home-ops-task-template-unchecked-update-many-without-created-by-nested.input';
import { HomeOpsTaskTemplateUncheckedUpdateManyWithoutFixedAssigneeNestedInput } from '../home-ops-task-template/home-ops-task-template-unchecked-update-many-without-fixed-assignee-nested.input';
import { HomeOpsTaskInstanceUncheckedUpdateManyWithoutAssigneeNestedInput } from '../home-ops-task-instance/home-ops-task-instance-unchecked-update-many-without-assignee-nested.input';
import { HomeOpsTaskInstanceUncheckedUpdateManyWithoutCompletedByNestedInput } from '../home-ops-task-instance/home-ops-task-instance-unchecked-update-many-without-completed-by-nested.input';
import { HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutUserNestedInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-unchecked-update-many-without-user-nested.input';
import { FeedProfileUncheckedUpdateOneWithoutUserNestedInput } from '../feed-profile/feed-profile-unchecked-update-one-without-user-nested.input';
import { FeedItemStateUncheckedUpdateManyWithoutUserNestedInput } from '../feed-item-state/feed-item-state-unchecked-update-many-without-user-nested.input';
import { FeedEventUncheckedUpdateManyWithoutUserNestedInput } from '../feed-event/feed-event-unchecked-update-many-without-user-nested.input';
import { FeedSourceNudgeUncheckedUpdateManyWithoutUserNestedInput } from '../feed-source-nudge/feed-source-nudge-unchecked-update-many-without-user-nested.input';
import { FeedSourcePreferenceUncheckedUpdateManyWithoutUserNestedInput } from '../feed-source-preference/feed-source-preference-unchecked-update-many-without-user-nested.input';
import { PortfolioUncheckedUpdateManyWithoutUserNestedInput } from '../portfolio/portfolio-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { CashflowCategoryUncheckedUpdateManyWithoutUserNestedInput } from '../cashflow-category/cashflow-category-unchecked-update-many-without-user-nested.input';
import { CashflowEntryUncheckedUpdateManyWithoutUserNestedInput } from '../cashflow-entry/cashflow-entry-unchecked-update-many-without-user-nested.input';
import { RecurringCashflowUncheckedUpdateManyWithoutUserNestedInput } from '../recurring-cashflow/recurring-cashflow-unchecked-update-many-without-user-nested.input';
import { ReviewCardBusinessUncheckedUpdateManyWithoutUserNestedInput } from '../review-card-business/review-card-business-unchecked-update-many-without-user-nested.input';
import { ReviewCardProjectUncheckedUpdateManyWithoutUserNestedInput } from '../review-card-project/review-card-project-unchecked-update-many-without-user-nested.input';
import { ReviewCardPremiumRequestUncheckedUpdateManyWithoutUserNestedInput } from '../review-card-premium-request/review-card-premium-request-unchecked-update-many-without-user-nested.input';
import { BucketGoalUncheckedUpdateManyWithoutUserNestedInput } from '../bucket-goal/bucket-goal-unchecked-update-many-without-user-nested.input';
import { BucketShareUncheckedUpdateManyWithoutUserNestedInput } from '../bucket-share/bucket-share-unchecked-update-many-without-user-nested.input';
import { BucketVisionBoardUncheckedUpdateManyWithoutUserNestedInput } from '../bucket-vision-board/bucket-vision-board-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

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

    @Field(() => StorageMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    storageMemberships?: StorageMemberUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => LogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => DiscartItemUncheckedUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    discartItems?: DiscartItemUncheckedUpdateManyWithoutCreatedByNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => RatingUncheckedUpdateManyWithoutSellerNestedInput, {nullable:true})
    ratingsAsSeller?: RatingUncheckedUpdateManyWithoutSellerNestedInput;

    @Field(() => RatingUncheckedUpdateManyWithoutBuyerNestedInput, {nullable:true})
    ratingsAsBuyer?: RatingUncheckedUpdateManyWithoutBuyerNestedInput;

    @Field(() => UserAppAccessUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    apps?: UserAppAccessUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FeedbackUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => HomeOpsHouseholdUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    homeOpsHouseholdsOwned?: HomeOpsHouseholdUncheckedUpdateManyWithoutOwnerNestedInput;

    @Field(() => HomeOpsHouseholdMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    homeOpsHouseholdMemberships?: HomeOpsHouseholdMemberUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => HomeOpsTaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    homeOpsTaskTemplatesCreated?: HomeOpsTaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput;

    @Field(() => HomeOpsTaskTemplateUncheckedUpdateManyWithoutFixedAssigneeNestedInput, {nullable:true})
    homeOpsTaskTemplatesAssigned?: HomeOpsTaskTemplateUncheckedUpdateManyWithoutFixedAssigneeNestedInput;

    @Field(() => HomeOpsTaskInstanceUncheckedUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    homeOpsTaskInstancesAssigned?: HomeOpsTaskInstanceUncheckedUpdateManyWithoutAssigneeNestedInput;

    @Field(() => HomeOpsTaskInstanceUncheckedUpdateManyWithoutCompletedByNestedInput, {nullable:true})
    homeOpsTaskInstancesCompleted?: HomeOpsTaskInstanceUncheckedUpdateManyWithoutCompletedByNestedInput;

    @Field(() => HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    homeOpsWorkloadLedgers?: HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FeedProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    feedProfile?: FeedProfileUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => FeedItemStateUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    feedItemStates?: FeedItemStateUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FeedEventUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    feedEvents?: FeedEventUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FeedSourceNudgeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    feedSourceNudges?: FeedSourceNudgeUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FeedSourcePreferenceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    feedSourcePreferences?: FeedSourcePreferenceUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PortfolioUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => PortfolioUncheckedUpdateManyWithoutUserNestedInput)
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CashflowCategoryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => CashflowCategoryUncheckedUpdateManyWithoutUserNestedInput)
    cashflowCategories?: CashflowCategoryUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CashflowEntryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => CashflowEntryUncheckedUpdateManyWithoutUserNestedInput)
    cashflowEntries?: CashflowEntryUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => RecurringCashflowUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => RecurringCashflowUncheckedUpdateManyWithoutUserNestedInput)
    recurringCashflows?: RecurringCashflowUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewCardBusinessUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviewCardBusinesses?: ReviewCardBusinessUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewCardProjectUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviewCardProjects?: ReviewCardProjectUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewCardPremiumRequestUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviewCardPremiumRequests?: ReviewCardPremiumRequestUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => BucketGoalUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    bucketGoals?: BucketGoalUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => BucketShareUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    bucketShares?: BucketShareUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => BucketVisionBoardUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    bucketVisionBoards?: BucketVisionBoardUncheckedUpdateManyWithoutUserNestedInput;
}
