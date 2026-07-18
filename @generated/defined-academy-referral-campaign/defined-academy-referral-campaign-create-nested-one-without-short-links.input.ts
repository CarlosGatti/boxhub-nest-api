import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutShortLinksInput } from './defined-academy-referral-campaign-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput } from './defined-academy-referral-campaign-create-or-connect-without-short-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateNestedOneWithoutShortLinksInput {

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutShortLinksInput)
    create?: DefinedAcademyReferralCampaignCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;
}
