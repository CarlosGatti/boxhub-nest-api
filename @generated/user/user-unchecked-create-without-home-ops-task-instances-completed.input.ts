import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMemberUncheckedCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-unchecked-create-nested-many-without-user.input';
import { LogUncheckedCreateNestedManyWithoutUserInput } from '../log/log-unchecked-create-nested-many-without-user.input';
import { DiscartItemUncheckedCreateNestedManyWithoutCreatedByInput } from '../discart-item/discart-item-unchecked-create-nested-many-without-created-by.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
import { RatingUncheckedCreateNestedManyWithoutSellerInput } from '../rating/rating-unchecked-create-nested-many-without-seller.input';
import { RatingUncheckedCreateNestedManyWithoutBuyerInput } from '../rating/rating-unchecked-create-nested-many-without-buyer.input';
import { UserAppAccessUncheckedCreateNestedManyWithoutUserInput } from '../user-app-access/user-app-access-unchecked-create-nested-many-without-user.input';
import { FeedbackUncheckedCreateNestedManyWithoutUserInput } from '../feedback/feedback-unchecked-create-nested-many-without-user.input';
import { HomeOpsHouseholdUncheckedCreateNestedManyWithoutOwnerInput } from '../home-ops-household/home-ops-household-unchecked-create-nested-many-without-owner.input';
import { HomeOpsHouseholdMemberUncheckedCreateNestedManyWithoutUserInput } from '../home-ops-household-member/home-ops-household-member-unchecked-create-nested-many-without-user.input';
import { HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput } from '../home-ops-task-template/home-ops-task-template-unchecked-create-nested-many-without-created-by.input';
import { HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutFixedAssigneeInput } from '../home-ops-task-template/home-ops-task-template-unchecked-create-nested-many-without-fixed-assignee.input';
import { HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutAssigneeInput } from '../home-ops-task-instance/home-ops-task-instance-unchecked-create-nested-many-without-assignee.input';
import { HomeOpsWorkloadLedgerUncheckedCreateNestedManyWithoutUserInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-unchecked-create-nested-many-without-user.input';
import { FeedProfileUncheckedCreateNestedOneWithoutUserInput } from '../feed-profile/feed-profile-unchecked-create-nested-one-without-user.input';
import { FeedItemStateUncheckedCreateNestedManyWithoutUserInput } from '../feed-item-state/feed-item-state-unchecked-create-nested-many-without-user.input';
import { FeedEventUncheckedCreateNestedManyWithoutUserInput } from '../feed-event/feed-event-unchecked-create-nested-many-without-user.input';
import { FeedSourceNudgeUncheckedCreateNestedManyWithoutUserInput } from '../feed-source-nudge/feed-source-nudge-unchecked-create-nested-many-without-user.input';
import { FeedSourcePreferenceUncheckedCreateNestedManyWithoutUserInput } from '../feed-source-preference/feed-source-preference-unchecked-create-nested-many-without-user.input';
import { PortfolioUncheckedCreateNestedManyWithoutUserInput } from '../portfolio/portfolio-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { CashflowCategoryUncheckedCreateNestedManyWithoutUserInput } from '../cashflow-category/cashflow-category-unchecked-create-nested-many-without-user.input';
import { CashflowEntryUncheckedCreateNestedManyWithoutUserInput } from '../cashflow-entry/cashflow-entry-unchecked-create-nested-many-without-user.input';
import { RecurringCashflowUncheckedCreateNestedManyWithoutUserInput } from '../recurring-cashflow/recurring-cashflow-unchecked-create-nested-many-without-user.input';
import { ReviewCardBusinessUncheckedCreateNestedManyWithoutUserInput } from '../review-card-business/review-card-business-unchecked-create-nested-many-without-user.input';
import { ReviewCardProjectUncheckedCreateNestedManyWithoutUserInput } from '../review-card-project/review-card-project-unchecked-create-nested-many-without-user.input';
import { ReviewCardPremiumRequestUncheckedCreateNestedManyWithoutUserInput } from '../review-card-premium-request/review-card-premium-request-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutHomeOpsTaskInstancesCompletedInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => StorageMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    storageMemberships?: StorageMemberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => LogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    logs?: LogUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => DiscartItemUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    discartItems?: DiscartItemUncheckedCreateNestedManyWithoutCreatedByInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => RatingUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    ratingsAsSeller?: RatingUncheckedCreateNestedManyWithoutSellerInput;

    @Field(() => RatingUncheckedCreateNestedManyWithoutBuyerInput, {nullable:true})
    ratingsAsBuyer?: RatingUncheckedCreateNestedManyWithoutBuyerInput;

    @Field(() => UserAppAccessUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    apps?: UserAppAccessUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FeedbackUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => HomeOpsHouseholdUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    homeOpsHouseholdsOwned?: HomeOpsHouseholdUncheckedCreateNestedManyWithoutOwnerInput;

    @Field(() => HomeOpsHouseholdMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    homeOpsHouseholdMemberships?: HomeOpsHouseholdMemberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    homeOpsTaskTemplatesCreated?: HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput;

    @Field(() => HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutFixedAssigneeInput, {nullable:true})
    homeOpsTaskTemplatesAssigned?: HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutFixedAssigneeInput;

    @Field(() => HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutAssigneeInput, {nullable:true})
    homeOpsTaskInstancesAssigned?: HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutAssigneeInput;

    @Field(() => HomeOpsWorkloadLedgerUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    homeOpsWorkloadLedgers?: HomeOpsWorkloadLedgerUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FeedProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    feedProfile?: FeedProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => FeedItemStateUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    feedItemStates?: FeedItemStateUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FeedEventUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    feedEvents?: FeedEventUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FeedSourceNudgeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    feedSourceNudges?: FeedSourceNudgeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FeedSourcePreferenceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    feedSourcePreferences?: FeedSourcePreferenceUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PortfolioUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => PortfolioUncheckedCreateNestedManyWithoutUserInput)
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CashflowCategoryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => CashflowCategoryUncheckedCreateNestedManyWithoutUserInput)
    cashflowCategories?: CashflowCategoryUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CashflowEntryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => CashflowEntryUncheckedCreateNestedManyWithoutUserInput)
    cashflowEntries?: CashflowEntryUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => RecurringCashflowUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => RecurringCashflowUncheckedCreateNestedManyWithoutUserInput)
    recurringCashflows?: RecurringCashflowUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCardBusinessUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviewCardBusinesses?: ReviewCardBusinessUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCardProjectUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviewCardProjects?: ReviewCardProjectUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCardPremiumRequestUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviewCardPremiumRequests?: ReviewCardPremiumRequestUncheckedCreateNestedManyWithoutUserInput;
}
