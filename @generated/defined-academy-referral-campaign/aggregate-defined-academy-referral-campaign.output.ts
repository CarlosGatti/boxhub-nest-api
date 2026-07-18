import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCountAggregate } from './defined-academy-referral-campaign-count-aggregate.output';
import { DefinedAcademyReferralCampaignAvgAggregate } from './defined-academy-referral-campaign-avg-aggregate.output';
import { DefinedAcademyReferralCampaignSumAggregate } from './defined-academy-referral-campaign-sum-aggregate.output';
import { DefinedAcademyReferralCampaignMinAggregate } from './defined-academy-referral-campaign-min-aggregate.output';
import { DefinedAcademyReferralCampaignMaxAggregate } from './defined-academy-referral-campaign-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyReferralCampaign {

    @Field(() => DefinedAcademyReferralCampaignCountAggregate, {nullable:true})
    _count?: DefinedAcademyReferralCampaignCountAggregate;

    @Field(() => DefinedAcademyReferralCampaignAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyReferralCampaignAvgAggregate;

    @Field(() => DefinedAcademyReferralCampaignSumAggregate, {nullable:true})
    _sum?: DefinedAcademyReferralCampaignSumAggregate;

    @Field(() => DefinedAcademyReferralCampaignMinAggregate, {nullable:true})
    _min?: DefinedAcademyReferralCampaignMinAggregate;

    @Field(() => DefinedAcademyReferralCampaignMaxAggregate, {nullable:true})
    _max?: DefinedAcademyReferralCampaignMaxAggregate;
}
