import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateWithoutReferralCampaignsInput } from './defined-academy-partner-create-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCreateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutReferralCampaignsInput)
    create!: DefinedAcademyPartnerCreateWithoutReferralCampaignsInput;
}
