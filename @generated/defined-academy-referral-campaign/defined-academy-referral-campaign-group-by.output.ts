import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralSourceType } from '../prisma/defined-academy-referral-source-type.enum';
import { DefinedAcademyReferralCampaignStatus } from '../prisma/defined-academy-referral-campaign-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyReferralCampaignCountAggregate } from './defined-academy-referral-campaign-count-aggregate.output';
import { DefinedAcademyReferralCampaignAvgAggregate } from './defined-academy-referral-campaign-avg-aggregate.output';
import { DefinedAcademyReferralCampaignSumAggregate } from './defined-academy-referral-campaign-sum-aggregate.output';
import { DefinedAcademyReferralCampaignMinAggregate } from './defined-academy-referral-campaign-min-aggregate.output';
import { DefinedAcademyReferralCampaignMaxAggregate } from './defined-academy-referral-campaign-max-aggregate.output';

@ObjectType()
export class DefinedAcademyReferralCampaignGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyReferralSourceType, {nullable:false})
    sourceType!: keyof typeof DefinedAcademyReferralSourceType;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    resourceId?: number;

    @Field(() => DefinedAcademyReferralCampaignStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyReferralCampaignStatus;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endsAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
