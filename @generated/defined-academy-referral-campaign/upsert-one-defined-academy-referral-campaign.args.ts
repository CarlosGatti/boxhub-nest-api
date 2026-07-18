import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateInput } from './defined-academy-referral-campaign-create.input';
import { DefinedAcademyReferralCampaignUpdateInput } from './defined-academy-referral-campaign-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyReferralCampaignArgs {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignCreateInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateInput)
    create!: DefinedAcademyReferralCampaignCreateInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateInput)
    update!: DefinedAcademyReferralCampaignUpdateInput;
}
