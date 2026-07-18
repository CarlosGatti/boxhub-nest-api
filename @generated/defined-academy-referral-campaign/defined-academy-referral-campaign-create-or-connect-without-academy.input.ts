import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateWithoutAcademyInput } from './defined-academy-referral-campaign-create-without-academy.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutAcademyInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutAcademyInput;
}
