import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyReferralCountOrderByAggregateInput } from './defined-academy-referral-count-order-by-aggregate.input';
import { DefinedAcademyReferralAvgOrderByAggregateInput } from './defined-academy-referral-avg-order-by-aggregate.input';
import { DefinedAcademyReferralMaxOrderByAggregateInput } from './defined-academy-referral-max-order-by-aggregate.input';
import { DefinedAcademyReferralMinOrderByAggregateInput } from './defined-academy-referral-min-order-by-aggregate.input';
import { DefinedAcademyReferralSumOrderByAggregateInput } from './defined-academy-referral-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyReferralOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    campaignId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referrerUserId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    partnerId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referredUserId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    referralCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstVisitedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    registeredAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    enrolledAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    attributionExpiresAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyReferralCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyReferralCountOrderByAggregateInput;

    @Field(() => DefinedAcademyReferralAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyReferralAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyReferralMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyReferralMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyReferralMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyReferralMinOrderByAggregateInput;

    @Field(() => DefinedAcademyReferralSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyReferralSumOrderByAggregateInput;
}
