import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignUpdateWithoutAcademyInput } from './defined-academy-referral-campaign-update-without-academy.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutAcademyInput)
    data!: DefinedAcademyReferralCampaignUpdateWithoutAcademyInput;
}
