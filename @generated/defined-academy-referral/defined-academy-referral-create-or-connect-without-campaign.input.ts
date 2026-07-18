import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateWithoutCampaignInput } from './defined-academy-referral-create-without-campaign.input';

@InputType()
export class DefinedAcademyReferralCreateOrConnectWithoutCampaignInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralCreateWithoutCampaignInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCreateWithoutCampaignInput)
    create!: DefinedAcademyReferralCreateWithoutCampaignInput;
}
