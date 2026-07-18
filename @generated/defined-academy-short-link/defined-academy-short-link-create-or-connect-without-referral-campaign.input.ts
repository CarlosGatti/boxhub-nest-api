import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateWithoutReferralCampaignInput } from './defined-academy-short-link-create-without-referral-campaign.input';

@InputType()
export class DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkCreateWithoutReferralCampaignInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutReferralCampaignInput)
    create!: DefinedAcademyShortLinkCreateWithoutReferralCampaignInput;
}
