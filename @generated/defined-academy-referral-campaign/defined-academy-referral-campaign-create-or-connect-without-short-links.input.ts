import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateWithoutShortLinksInput } from './defined-academy-referral-campaign-create-without-short-links.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutShortLinksInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutShortLinksInput;
}
