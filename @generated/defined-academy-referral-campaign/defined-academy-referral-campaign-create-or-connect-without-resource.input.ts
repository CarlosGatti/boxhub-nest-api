import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateWithoutResourceInput } from './defined-academy-referral-campaign-create-without-resource.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutResourceInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutResourceInput;
}
