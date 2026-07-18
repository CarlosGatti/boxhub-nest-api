import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignUpdateWithoutResourceInput } from './defined-academy-referral-campaign-update-without-resource.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutResourceInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutResourceInput)
    data!: DefinedAcademyReferralCampaignUpdateWithoutResourceInput;
}
