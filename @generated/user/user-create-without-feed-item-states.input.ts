import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMemberCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-create-nested-many-without-user.input';
import { LogCreateNestedManyWithoutUserInput } from '../log/log-create-nested-many-without-user.input';
import { DiscartItemCreateNestedManyWithoutCreatedByInput } from '../discart-item/discart-item-create-nested-many-without-created-by.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { RatingCreateNestedManyWithoutSellerInput } from '../rating/rating-create-nested-many-without-seller.input';
import { RatingCreateNestedManyWithoutBuyerInput } from '../rating/rating-create-nested-many-without-buyer.input';
import { UserAppAccessCreateNestedManyWithoutUserInput } from '../user-app-access/user-app-access-create-nested-many-without-user.input';
import { FeedbackCreateNestedManyWithoutUserInput } from '../feedback/feedback-create-nested-many-without-user.input';
import { HomeOpsHouseholdCreateNestedManyWithoutOwnerInput } from '../home-ops-household/home-ops-household-create-nested-many-without-owner.input';
import { HomeOpsHouseholdMemberCreateNestedManyWithoutUserInput } from '../home-ops-household-member/home-ops-household-member-create-nested-many-without-user.input';
import { HomeOpsTaskTemplateCreateNestedManyWithoutCreatedByInput } from '../home-ops-task-template/home-ops-task-template-create-nested-many-without-created-by.input';
import { HomeOpsTaskTemplateCreateNestedManyWithoutFixedAssigneeInput } from '../home-ops-task-template/home-ops-task-template-create-nested-many-without-fixed-assignee.input';
import { HomeOpsTaskInstanceCreateNestedManyWithoutAssigneeInput } from '../home-ops-task-instance/home-ops-task-instance-create-nested-many-without-assignee.input';
import { HomeOpsTaskInstanceCreateNestedManyWithoutCompletedByInput } from '../home-ops-task-instance/home-ops-task-instance-create-nested-many-without-completed-by.input';
import { HomeOpsWorkloadLedgerCreateNestedManyWithoutUserInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-create-nested-many-without-user.input';
import { FeedProfileCreateNestedOneWithoutUserInput } from '../feed-profile/feed-profile-create-nested-one-without-user.input';
import { FeedEventCreateNestedManyWithoutUserInput } from '../feed-event/feed-event-create-nested-many-without-user.input';
import { FeedSourceNudgeCreateNestedManyWithoutUserInput } from '../feed-source-nudge/feed-source-nudge-create-nested-many-without-user.input';
import { FeedSourcePreferenceCreateNestedManyWithoutUserInput } from '../feed-source-preference/feed-source-preference-create-nested-many-without-user.input';
import { PortfolioCreateNestedManyWithoutUserInput } from '../portfolio/portfolio-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateNestedManyWithoutUserInput } from '../cashflow-category/cashflow-category-create-nested-many-without-user.input';
import { CashflowEntryCreateNestedManyWithoutUserInput } from '../cashflow-entry/cashflow-entry-create-nested-many-without-user.input';
import { RecurringCashflowCreateNestedManyWithoutUserInput } from '../recurring-cashflow/recurring-cashflow-create-nested-many-without-user.input';
import { ReviewCardBusinessCreateNestedManyWithoutUserInput } from '../review-card-business/review-card-business-create-nested-many-without-user.input';
import { ReviewCardProjectCreateNestedManyWithoutUserInput } from '../review-card-project/review-card-project-create-nested-many-without-user.input';
import { ReviewCardPremiumRequestCreateNestedManyWithoutUserInput } from '../review-card-premium-request/review-card-premium-request-create-nested-many-without-user.input';
import { BucketGoalCreateNestedManyWithoutUserInput } from '../bucket-goal/bucket-goal-create-nested-many-without-user.input';
import { BucketShareCreateNestedManyWithoutUserInput } from '../bucket-share/bucket-share-create-nested-many-without-user.input';
import { BucketVisionBoardCreateNestedManyWithoutUserInput } from '../bucket-vision-board/bucket-vision-board-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutFeedItemStatesInput {

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
    contactPhone?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isPremium?: boolean;

    @Field(() => String, {nullable:true})
    subscriptionId?: string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    willExpireAt?: Date | string;

    @Field(() => String, {nullable:true})
    apartment?: string;

    @Field(() => Boolean, {nullable:true})
    isApprovedResident?: boolean;

    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;

    @Field(() => StorageMemberCreateNestedManyWithoutUserInput, {nullable:true})
    storageMemberships?: StorageMemberCreateNestedManyWithoutUserInput;

    @Field(() => LogCreateNestedManyWithoutUserInput, {nullable:true})
    logs?: LogCreateNestedManyWithoutUserInput;

    @Field(() => DiscartItemCreateNestedManyWithoutCreatedByInput, {nullable:true})
    discartItems?: DiscartItemCreateNestedManyWithoutCreatedByInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => RatingCreateNestedManyWithoutSellerInput, {nullable:true})
    ratingsAsSeller?: RatingCreateNestedManyWithoutSellerInput;

    @Field(() => RatingCreateNestedManyWithoutBuyerInput, {nullable:true})
    ratingsAsBuyer?: RatingCreateNestedManyWithoutBuyerInput;

    @Field(() => UserAppAccessCreateNestedManyWithoutUserInput, {nullable:true})
    apps?: UserAppAccessCreateNestedManyWithoutUserInput;

    @Field(() => FeedbackCreateNestedManyWithoutUserInput, {nullable:true})
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput;

    @Field(() => HomeOpsHouseholdCreateNestedManyWithoutOwnerInput, {nullable:true})
    homeOpsHouseholdsOwned?: HomeOpsHouseholdCreateNestedManyWithoutOwnerInput;

    @Field(() => HomeOpsHouseholdMemberCreateNestedManyWithoutUserInput, {nullable:true})
    homeOpsHouseholdMemberships?: HomeOpsHouseholdMemberCreateNestedManyWithoutUserInput;

    @Field(() => HomeOpsTaskTemplateCreateNestedManyWithoutCreatedByInput, {nullable:true})
    homeOpsTaskTemplatesCreated?: HomeOpsTaskTemplateCreateNestedManyWithoutCreatedByInput;

    @Field(() => HomeOpsTaskTemplateCreateNestedManyWithoutFixedAssigneeInput, {nullable:true})
    homeOpsTaskTemplatesAssigned?: HomeOpsTaskTemplateCreateNestedManyWithoutFixedAssigneeInput;

    @Field(() => HomeOpsTaskInstanceCreateNestedManyWithoutAssigneeInput, {nullable:true})
    homeOpsTaskInstancesAssigned?: HomeOpsTaskInstanceCreateNestedManyWithoutAssigneeInput;

    @Field(() => HomeOpsTaskInstanceCreateNestedManyWithoutCompletedByInput, {nullable:true})
    homeOpsTaskInstancesCompleted?: HomeOpsTaskInstanceCreateNestedManyWithoutCompletedByInput;

    @Field(() => HomeOpsWorkloadLedgerCreateNestedManyWithoutUserInput, {nullable:true})
    homeOpsWorkloadLedgers?: HomeOpsWorkloadLedgerCreateNestedManyWithoutUserInput;

    @Field(() => FeedProfileCreateNestedOneWithoutUserInput, {nullable:true})
    feedProfile?: FeedProfileCreateNestedOneWithoutUserInput;

    @Field(() => FeedEventCreateNestedManyWithoutUserInput, {nullable:true})
    feedEvents?: FeedEventCreateNestedManyWithoutUserInput;

    @Field(() => FeedSourceNudgeCreateNestedManyWithoutUserInput, {nullable:true})
    feedSourceNudges?: FeedSourceNudgeCreateNestedManyWithoutUserInput;

    @Field(() => FeedSourcePreferenceCreateNestedManyWithoutUserInput, {nullable:true})
    feedSourcePreferences?: FeedSourcePreferenceCreateNestedManyWithoutUserInput;

    @Field(() => PortfolioCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => PortfolioCreateNestedManyWithoutUserInput)
    portfolios?: PortfolioCreateNestedManyWithoutUserInput;

    @Field(() => CashflowCategoryCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => CashflowCategoryCreateNestedManyWithoutUserInput)
    cashflowCategories?: CashflowCategoryCreateNestedManyWithoutUserInput;

    @Field(() => CashflowEntryCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => CashflowEntryCreateNestedManyWithoutUserInput)
    cashflowEntries?: CashflowEntryCreateNestedManyWithoutUserInput;

    @Field(() => RecurringCashflowCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => RecurringCashflowCreateNestedManyWithoutUserInput)
    recurringCashflows?: RecurringCashflowCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCardBusinessCreateNestedManyWithoutUserInput, {nullable:true})
    reviewCardBusinesses?: ReviewCardBusinessCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCardProjectCreateNestedManyWithoutUserInput, {nullable:true})
    reviewCardProjects?: ReviewCardProjectCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCardPremiumRequestCreateNestedManyWithoutUserInput, {nullable:true})
    reviewCardPremiumRequests?: ReviewCardPremiumRequestCreateNestedManyWithoutUserInput;

    @Field(() => BucketGoalCreateNestedManyWithoutUserInput, {nullable:true})
    bucketGoals?: BucketGoalCreateNestedManyWithoutUserInput;

    @Field(() => BucketShareCreateNestedManyWithoutUserInput, {nullable:true})
    bucketShares?: BucketShareCreateNestedManyWithoutUserInput;

    @Field(() => BucketVisionBoardCreateNestedManyWithoutUserInput, {nullable:true})
    bucketVisionBoards?: BucketVisionBoardCreateNestedManyWithoutUserInput;
}
