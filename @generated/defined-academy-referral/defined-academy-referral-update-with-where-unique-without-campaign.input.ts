import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralUpdateWithoutCampaignInput } from './defined-academy-referral-update-without-campaign.input';

@InputType()
export class DefinedAcademyReferralUpdateWithWhereUniqueWithoutCampaignInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralUpdateWithoutCampaignInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateWithoutCampaignInput)
    data!: DefinedAcademyReferralUpdateWithoutCampaignInput;
}
