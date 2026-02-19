import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { StorageMemberOrderByRelationAggregateInput } from '../storage-member/storage-member-order-by-relation-aggregate.input';
import { LogOrderByRelationAggregateInput } from '../log/log-order-by-relation-aggregate.input';
import { DiscartItemOrderByRelationAggregateInput } from '../discart-item/discart-item-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { RatingOrderByRelationAggregateInput } from '../rating/rating-order-by-relation-aggregate.input';
import { UserAppAccessOrderByRelationAggregateInput } from '../user-app-access/user-app-access-order-by-relation-aggregate.input';
import { FeedbackOrderByRelationAggregateInput } from '../feedback/feedback-order-by-relation-aggregate.input';
import { HomeOpsHouseholdOrderByRelationAggregateInput } from '../home-ops-household/home-ops-household-order-by-relation-aggregate.input';
import { HomeOpsHouseholdMemberOrderByRelationAggregateInput } from '../home-ops-household-member/home-ops-household-member-order-by-relation-aggregate.input';
import { HomeOpsTaskTemplateOrderByRelationAggregateInput } from '../home-ops-task-template/home-ops-task-template-order-by-relation-aggregate.input';
import { HomeOpsTaskInstanceOrderByRelationAggregateInput } from '../home-ops-task-instance/home-ops-task-instance-order-by-relation-aggregate.input';
import { HomeOpsWorkloadLedgerOrderByRelationAggregateInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-order-by-relation-aggregate.input';
import { FeedProfileOrderByWithRelationInput } from '../feed-profile/feed-profile-order-by-with-relation.input';
import { FeedItemStateOrderByRelationAggregateInput } from '../feed-item-state/feed-item-state-order-by-relation-aggregate.input';
import { FeedEventOrderByRelationAggregateInput } from '../feed-event/feed-event-order-by-relation-aggregate.input';
import { FeedSourceNudgeOrderByRelationAggregateInput } from '../feed-source-nudge/feed-source-nudge-order-by-relation-aggregate.input';
import { FeedSourcePreferenceOrderByRelationAggregateInput } from '../feed-source-preference/feed-source-preference-order-by-relation-aggregate.input';
import { PortfolioOrderByRelationAggregateInput } from '../portfolio/portfolio-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { CashflowCategoryOrderByRelationAggregateInput } from '../cashflow-category/cashflow-category-order-by-relation-aggregate.input';
import { CashflowEntryOrderByRelationAggregateInput } from '../cashflow-entry/cashflow-entry-order-by-relation-aggregate.input';
import { RecurringCashflowOrderByRelationAggregateInput } from '../recurring-cashflow/recurring-cashflow-order-by-relation-aggregate.input';
import { ReviewCardBusinessOrderByRelationAggregateInput } from '../review-card-business/review-card-business-order-by-relation-aggregate.input';
import { ReviewCardProjectOrderByRelationAggregateInput } from '../review-card-project/review-card-project-order-by-relation-aggregate.input';
import { ReviewCardPremiumRequestOrderByRelationAggregateInput } from '../review-card-premium-request/review-card-premium-request-order-by-relation-aggregate.input';
import { BucketGoalOrderByRelationAggregateInput } from '../bucket-goal/bucket-goal-order-by-relation-aggregate.input';
import { BucketVisionBoardOrderByRelationAggregateInput } from '../bucket-vision-board/bucket-vision-board-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    nickname?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    public?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    profilePicture?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    about?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contactPhone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPremium?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subscriptionId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    expiresAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    willExpireAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    apartment?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isApprovedResident?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAdmin?: keyof typeof SortOrder;

    @Field(() => StorageMemberOrderByRelationAggregateInput, {nullable:true})
    storageMemberships?: StorageMemberOrderByRelationAggregateInput;

    @Field(() => LogOrderByRelationAggregateInput, {nullable:true})
    logs?: LogOrderByRelationAggregateInput;

    @Field(() => DiscartItemOrderByRelationAggregateInput, {nullable:true})
    discartItems?: DiscartItemOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => RatingOrderByRelationAggregateInput, {nullable:true})
    ratingsAsSeller?: RatingOrderByRelationAggregateInput;

    @Field(() => RatingOrderByRelationAggregateInput, {nullable:true})
    ratingsAsBuyer?: RatingOrderByRelationAggregateInput;

    @Field(() => UserAppAccessOrderByRelationAggregateInput, {nullable:true})
    apps?: UserAppAccessOrderByRelationAggregateInput;

    @Field(() => FeedbackOrderByRelationAggregateInput, {nullable:true})
    feedbacks?: FeedbackOrderByRelationAggregateInput;

    @Field(() => HomeOpsHouseholdOrderByRelationAggregateInput, {nullable:true})
    homeOpsHouseholdsOwned?: HomeOpsHouseholdOrderByRelationAggregateInput;

    @Field(() => HomeOpsHouseholdMemberOrderByRelationAggregateInput, {nullable:true})
    homeOpsHouseholdMemberships?: HomeOpsHouseholdMemberOrderByRelationAggregateInput;

    @Field(() => HomeOpsTaskTemplateOrderByRelationAggregateInput, {nullable:true})
    homeOpsTaskTemplatesCreated?: HomeOpsTaskTemplateOrderByRelationAggregateInput;

    @Field(() => HomeOpsTaskTemplateOrderByRelationAggregateInput, {nullable:true})
    homeOpsTaskTemplatesAssigned?: HomeOpsTaskTemplateOrderByRelationAggregateInput;

    @Field(() => HomeOpsTaskInstanceOrderByRelationAggregateInput, {nullable:true})
    homeOpsTaskInstancesAssigned?: HomeOpsTaskInstanceOrderByRelationAggregateInput;

    @Field(() => HomeOpsTaskInstanceOrderByRelationAggregateInput, {nullable:true})
    homeOpsTaskInstancesCompleted?: HomeOpsTaskInstanceOrderByRelationAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerOrderByRelationAggregateInput, {nullable:true})
    homeOpsWorkloadLedgers?: HomeOpsWorkloadLedgerOrderByRelationAggregateInput;

    @Field(() => FeedProfileOrderByWithRelationInput, {nullable:true})
    feedProfile?: FeedProfileOrderByWithRelationInput;

    @Field(() => FeedItemStateOrderByRelationAggregateInput, {nullable:true})
    feedItemStates?: FeedItemStateOrderByRelationAggregateInput;

    @Field(() => FeedEventOrderByRelationAggregateInput, {nullable:true})
    feedEvents?: FeedEventOrderByRelationAggregateInput;

    @Field(() => FeedSourceNudgeOrderByRelationAggregateInput, {nullable:true})
    feedSourceNudges?: FeedSourceNudgeOrderByRelationAggregateInput;

    @Field(() => FeedSourcePreferenceOrderByRelationAggregateInput, {nullable:true})
    feedSourcePreferences?: FeedSourcePreferenceOrderByRelationAggregateInput;

    @Field(() => PortfolioOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PortfolioOrderByRelationAggregateInput)
    portfolios?: PortfolioOrderByRelationAggregateInput;

    @Field(() => CashflowCategoryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CashflowCategoryOrderByRelationAggregateInput)
    cashflowCategories?: CashflowCategoryOrderByRelationAggregateInput;

    @Field(() => CashflowEntryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CashflowEntryOrderByRelationAggregateInput)
    cashflowEntries?: CashflowEntryOrderByRelationAggregateInput;

    @Field(() => RecurringCashflowOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowOrderByRelationAggregateInput)
    recurringCashflows?: RecurringCashflowOrderByRelationAggregateInput;

    @Field(() => ReviewCardBusinessOrderByRelationAggregateInput, {nullable:true})
    reviewCardBusinesses?: ReviewCardBusinessOrderByRelationAggregateInput;

    @Field(() => ReviewCardProjectOrderByRelationAggregateInput, {nullable:true})
    reviewCardProjects?: ReviewCardProjectOrderByRelationAggregateInput;

    @Field(() => ReviewCardPremiumRequestOrderByRelationAggregateInput, {nullable:true})
    reviewCardPremiumRequests?: ReviewCardPremiumRequestOrderByRelationAggregateInput;

    @Field(() => BucketGoalOrderByRelationAggregateInput, {nullable:true})
    bucketGoals?: BucketGoalOrderByRelationAggregateInput;

    @Field(() => BucketVisionBoardOrderByRelationAggregateInput, {nullable:true})
    bucketVisionBoards?: BucketVisionBoardOrderByRelationAggregateInput;
}
