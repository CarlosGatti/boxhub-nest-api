import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StorageMemberListRelationFilter } from '../storage-member/storage-member-list-relation-filter.input';
import { LogListRelationFilter } from '../log/log-list-relation-filter.input';
import { DiscartItemListRelationFilter } from '../discart-item/discart-item-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { RatingListRelationFilter } from '../rating/rating-list-relation-filter.input';
import { UserAppAccessListRelationFilter } from '../user-app-access/user-app-access-list-relation-filter.input';
import { FeedbackListRelationFilter } from '../feedback/feedback-list-relation-filter.input';
import { HomeOpsHouseholdListRelationFilter } from '../home-ops-household/home-ops-household-list-relation-filter.input';
import { HomeOpsHouseholdMemberListRelationFilter } from '../home-ops-household-member/home-ops-household-member-list-relation-filter.input';
import { HomeOpsTaskTemplateListRelationFilter } from '../home-ops-task-template/home-ops-task-template-list-relation-filter.input';
import { HomeOpsTaskInstanceListRelationFilter } from '../home-ops-task-instance/home-ops-task-instance-list-relation-filter.input';
import { HomeOpsWorkloadLedgerListRelationFilter } from '../home-ops-workload-ledger/home-ops-workload-ledger-list-relation-filter.input';
import { FeedProfileNullableRelationFilter } from '../feed-profile/feed-profile-nullable-relation-filter.input';
import { FeedItemStateListRelationFilter } from '../feed-item-state/feed-item-state-list-relation-filter.input';
import { FeedEventListRelationFilter } from '../feed-event/feed-event-list-relation-filter.input';
import { FeedSourceNudgeListRelationFilter } from '../feed-source-nudge/feed-source-nudge-list-relation-filter.input';
import { FeedSourcePreferenceListRelationFilter } from '../feed-source-preference/feed-source-preference-list-relation-filter.input';
import { PortfolioListRelationFilter } from '../portfolio/portfolio-list-relation-filter.input';
import { Type } from 'class-transformer';
import { CashflowCategoryListRelationFilter } from '../cashflow-category/cashflow-category-list-relation-filter.input';
import { CashflowEntryListRelationFilter } from '../cashflow-entry/cashflow-entry-list-relation-filter.input';
import { RecurringCashflowListRelationFilter } from '../recurring-cashflow/recurring-cashflow-list-relation-filter.input';
import { ReviewCardBusinessListRelationFilter } from '../review-card-business/review-card-business-list-relation-filter.input';
import { ReviewCardProjectListRelationFilter } from '../review-card-project/review-card-project-list-relation-filter.input';
import { ReviewCardPremiumRequestListRelationFilter } from '../review-card-premium-request/review-card-premium-request-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickname?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    public?: BoolFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    emailVerified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profilePicture?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    about?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contactPhone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPremium?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subscriptionId?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    willExpireAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apartment?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isApprovedResident?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAdmin?: BoolFilter;

    @Field(() => StorageMemberListRelationFilter, {nullable:true})
    storageMemberships?: StorageMemberListRelationFilter;

    @Field(() => LogListRelationFilter, {nullable:true})
    logs?: LogListRelationFilter;

    @Field(() => DiscartItemListRelationFilter, {nullable:true})
    discartItems?: DiscartItemListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => RatingListRelationFilter, {nullable:true})
    ratingsAsSeller?: RatingListRelationFilter;

    @Field(() => RatingListRelationFilter, {nullable:true})
    ratingsAsBuyer?: RatingListRelationFilter;

    @Field(() => UserAppAccessListRelationFilter, {nullable:true})
    apps?: UserAppAccessListRelationFilter;

    @Field(() => FeedbackListRelationFilter, {nullable:true})
    feedbacks?: FeedbackListRelationFilter;

    @Field(() => HomeOpsHouseholdListRelationFilter, {nullable:true})
    homeOpsHouseholdsOwned?: HomeOpsHouseholdListRelationFilter;

    @Field(() => HomeOpsHouseholdMemberListRelationFilter, {nullable:true})
    homeOpsHouseholdMemberships?: HomeOpsHouseholdMemberListRelationFilter;

    @Field(() => HomeOpsTaskTemplateListRelationFilter, {nullable:true})
    homeOpsTaskTemplatesCreated?: HomeOpsTaskTemplateListRelationFilter;

    @Field(() => HomeOpsTaskTemplateListRelationFilter, {nullable:true})
    homeOpsTaskTemplatesAssigned?: HomeOpsTaskTemplateListRelationFilter;

    @Field(() => HomeOpsTaskInstanceListRelationFilter, {nullable:true})
    homeOpsTaskInstancesAssigned?: HomeOpsTaskInstanceListRelationFilter;

    @Field(() => HomeOpsTaskInstanceListRelationFilter, {nullable:true})
    homeOpsTaskInstancesCompleted?: HomeOpsTaskInstanceListRelationFilter;

    @Field(() => HomeOpsWorkloadLedgerListRelationFilter, {nullable:true})
    homeOpsWorkloadLedgers?: HomeOpsWorkloadLedgerListRelationFilter;

    @Field(() => FeedProfileNullableRelationFilter, {nullable:true})
    feedProfile?: FeedProfileNullableRelationFilter;

    @Field(() => FeedItemStateListRelationFilter, {nullable:true})
    feedItemStates?: FeedItemStateListRelationFilter;

    @Field(() => FeedEventListRelationFilter, {nullable:true})
    feedEvents?: FeedEventListRelationFilter;

    @Field(() => FeedSourceNudgeListRelationFilter, {nullable:true})
    feedSourceNudges?: FeedSourceNudgeListRelationFilter;

    @Field(() => FeedSourcePreferenceListRelationFilter, {nullable:true})
    feedSourcePreferences?: FeedSourcePreferenceListRelationFilter;

    @Field(() => PortfolioListRelationFilter, {nullable:true})
    @Type(() => PortfolioListRelationFilter)
    portfolios?: PortfolioListRelationFilter;

    @Field(() => CashflowCategoryListRelationFilter, {nullable:true})
    @Type(() => CashflowCategoryListRelationFilter)
    cashflowCategories?: CashflowCategoryListRelationFilter;

    @Field(() => CashflowEntryListRelationFilter, {nullable:true})
    @Type(() => CashflowEntryListRelationFilter)
    cashflowEntries?: CashflowEntryListRelationFilter;

    @Field(() => RecurringCashflowListRelationFilter, {nullable:true})
    @Type(() => RecurringCashflowListRelationFilter)
    recurringCashflows?: RecurringCashflowListRelationFilter;

    @Field(() => ReviewCardBusinessListRelationFilter, {nullable:true})
    reviewCardBusinesses?: ReviewCardBusinessListRelationFilter;

    @Field(() => ReviewCardProjectListRelationFilter, {nullable:true})
    reviewCardProjects?: ReviewCardProjectListRelationFilter;

    @Field(() => ReviewCardPremiumRequestListRelationFilter, {nullable:true})
    reviewCardPremiumRequests?: ReviewCardPremiumRequestListRelationFilter;
}
