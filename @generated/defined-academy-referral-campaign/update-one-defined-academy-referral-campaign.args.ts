import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignUpdateInput } from './defined-academy-referral-campaign-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyReferralCampaignArgs {

    @Field(() => DefinedAcademyReferralCampaignUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateInput)
    data!: DefinedAcademyReferralCampaignUpdateInput;

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;
}
