import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyReferralCampaignCountOrderByAggregateInput } from './defined-academy-referral-campaign-count-order-by-aggregate.input';
import { DefinedAcademyReferralCampaignAvgOrderByAggregateInput } from './defined-academy-referral-campaign-avg-order-by-aggregate.input';
import { DefinedAcademyReferralCampaignMaxOrderByAggregateInput } from './defined-academy-referral-campaign-max-order-by-aggregate.input';
import { DefinedAcademyReferralCampaignMinOrderByAggregateInput } from './defined-academy-referral-campaign-min-order-by-aggregate.input';
import { DefinedAcademyReferralCampaignSumOrderByAggregateInput } from './defined-academy-referral-campaign-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyReferralCampaignOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sourceType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    partnerId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    courseId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resourceId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    startsAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    endsAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyReferralCampaignCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyReferralCampaignCountOrderByAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyReferralCampaignAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyReferralCampaignMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyReferralCampaignMinOrderByAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyReferralCampaignSumOrderByAggregateInput;
}
