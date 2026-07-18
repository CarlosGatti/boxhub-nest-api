import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutReferralCampaignInput } from './defined-academy-short-link-update-without-referral-campaign.input';

@InputType()
export class DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutReferralCampaignInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutReferralCampaignInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutReferralCampaignInput)
    data!: DefinedAcademyShortLinkUpdateWithoutReferralCampaignInput;
}
