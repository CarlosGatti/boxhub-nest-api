import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralUpdateWithoutCampaignInput } from './defined-academy-referral-update-without-campaign.input';
import { DefinedAcademyReferralCreateWithoutCampaignInput } from './defined-academy-referral-create-without-campaign.input';

@InputType()
export class DefinedAcademyReferralUpsertWithWhereUniqueWithoutCampaignInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralUpdateWithoutCampaignInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateWithoutCampaignInput)
    update!: DefinedAcademyReferralUpdateWithoutCampaignInput;

    @Field(() => DefinedAcademyReferralCreateWithoutCampaignInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCreateWithoutCampaignInput)
    create!: DefinedAcademyReferralCreateWithoutCampaignInput;
}
