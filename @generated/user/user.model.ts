import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMember } from '../storage-member/storage-member.model';
import { Log } from '../log/log.model';
import { DiscartItem } from '../discart-item/discart-item.model';
import { Comment } from '../comment/comment.model';
import { Rating } from '../rating/rating.model';
import { UserAppAccess } from '../user-app-access/user-app-access.model';
import { Feedback } from '../feedback/feedback.model';
import { HomeOpsHousehold } from '../home-ops-household/home-ops-household.model';
import { HomeOpsHouseholdMember } from '../home-ops-household-member/home-ops-household-member.model';
import { HomeOpsTaskTemplate } from '../home-ops-task-template/home-ops-task-template.model';
import { HomeOpsTaskInstance } from '../home-ops-task-instance/home-ops-task-instance.model';
import { HomeOpsWorkloadLedger } from '../home-ops-workload-ledger/home-ops-workload-ledger.model';
import { FeedProfile } from '../feed-profile/feed-profile.model';
import { FeedItemState } from '../feed-item-state/feed-item-state.model';
import { Portfolio } from '../portfolio/portfolio.model';
import { CashflowCategory } from '../cashflow-category/cashflow-category.model';
import { CashflowEntry } from '../cashflow-entry/cashflow-entry.model';
import { RecurringCashflow } from '../recurring-cashflow/recurring-cashflow.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    nickname!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    public!: boolean;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    emailVerified!: boolean;

    @Field(() => String, {nullable:true})
    profilePicture!: string | null;

    @Field(() => String, {nullable:true})
    about!: string | null;

    @Field(() => String, {nullable:true})
    contactPhone!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPremium!: boolean;

    @Field(() => String, {nullable:true})
    subscriptionId!: string | null;

    @Field(() => Date, {nullable:true})
    expiresAt!: Date | null;

    @Field(() => Date, {nullable:true})
    willExpireAt!: Date | null;

    @Field(() => String, {nullable:true})
    apartment!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isApprovedResident!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isAdmin!: boolean;

    @Field(() => [StorageMember], {nullable:true})
    storageMemberships?: Array<StorageMember>;

    @Field(() => [Log], {nullable:true})
    logs?: Array<Log>;

    @Field(() => [DiscartItem], {nullable:true})
    discartItems?: Array<DiscartItem>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Rating], {nullable:true})
    ratingsAsSeller?: Array<Rating>;

    @Field(() => [Rating], {nullable:true})
    ratingsAsBuyer?: Array<Rating>;

    @Field(() => [UserAppAccess], {nullable:true})
    apps?: Array<UserAppAccess>;

    @Field(() => [Feedback], {nullable:true})
    feedbacks?: Array<Feedback>;

    @Field(() => [HomeOpsHousehold], {nullable:true})
    homeOpsHouseholdsOwned?: Array<HomeOpsHousehold>;

    @Field(() => [HomeOpsHouseholdMember], {nullable:true})
    homeOpsHouseholdMemberships?: Array<HomeOpsHouseholdMember>;

    @Field(() => [HomeOpsTaskTemplate], {nullable:true})
    homeOpsTaskTemplatesCreated?: Array<HomeOpsTaskTemplate>;

    @Field(() => [HomeOpsTaskTemplate], {nullable:true})
    homeOpsTaskTemplatesAssigned?: Array<HomeOpsTaskTemplate>;

    @Field(() => [HomeOpsTaskInstance], {nullable:true})
    homeOpsTaskInstancesAssigned?: Array<HomeOpsTaskInstance>;

    @Field(() => [HomeOpsTaskInstance], {nullable:true})
    homeOpsTaskInstancesCompleted?: Array<HomeOpsTaskInstance>;

    @Field(() => [HomeOpsWorkloadLedger], {nullable:true})
    homeOpsWorkloadLedgers?: Array<HomeOpsWorkloadLedger>;

    @Field(() => FeedProfile, {nullable:true})
    feedProfile?: FeedProfile | null;

    @Field(() => [FeedItemState], {nullable:true})
    feedItemStates?: Array<FeedItemState>;

    @Field(() => [Portfolio], {nullable:true})
    portfolios?: Array<Portfolio>;

    @Field(() => [CashflowCategory], {nullable:true})
    cashflowCategories?: Array<CashflowCategory>;

    @Field(() => [CashflowEntry], {nullable:true})
    cashflowEntries?: Array<CashflowEntry>;

    @Field(() => [RecurringCashflow], {nullable:true})
    recurringCashflows?: Array<RecurringCashflow>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
