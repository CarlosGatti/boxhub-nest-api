import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutShortLinksInput } from './defined-academy-referral-campaign-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput } from './defined-academy-referral-campaign-create-or-connect-without-short-links.input';
import { DefinedAcademyReferralCampaignUpsertWithoutShortLinksInput } from './defined-academy-referral-campaign-upsert-without-short-links.input';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutShortLinksInput } from './defined-academy-referral-campaign-update-to-one-with-where-without-short-links.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateOneWithoutShortLinksNestedInput {

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutShortLinksInput)
    create?: DefinedAcademyReferralCampaignCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyReferralCampaignCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyReferralCampaignUpsertWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpsertWithoutShortLinksInput)
    upsert?: DefinedAcademyReferralCampaignUpsertWithoutShortLinksInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    disconnect?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    delete?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutShortLinksInput)
    update?: DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutShortLinksInput;
}
