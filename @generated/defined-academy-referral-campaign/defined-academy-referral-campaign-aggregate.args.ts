import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignOrderByWithRelationInput } from './defined-academy-referral-campaign-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCountAggregateInput } from './defined-academy-referral-campaign-count-aggregate.input';
import { DefinedAcademyReferralCampaignAvgAggregateInput } from './defined-academy-referral-campaign-avg-aggregate.input';
import { DefinedAcademyReferralCampaignSumAggregateInput } from './defined-academy-referral-campaign-sum-aggregate.input';
import { DefinedAcademyReferralCampaignMinAggregateInput } from './defined-academy-referral-campaign-min-aggregate.input';
import { DefinedAcademyReferralCampaignMaxAggregateInput } from './defined-academy-referral-campaign-max-aggregate.input';

@ArgsType()
export class DefinedAcademyReferralCampaignAggregateArgs {

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    where?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => [DefinedAcademyReferralCampaignOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyReferralCampaignOrderByWithRelationInput>;

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyReferralCampaignCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyReferralCampaignCountAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyReferralCampaignAvgAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyReferralCampaignSumAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyReferralCampaignMinAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyReferralCampaignMaxAggregateInput;
}
