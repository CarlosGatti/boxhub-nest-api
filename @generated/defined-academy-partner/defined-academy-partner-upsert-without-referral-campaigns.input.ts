import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerUpdateWithoutReferralCampaignsInput } from './defined-academy-partner-update-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateWithoutReferralCampaignsInput } from './defined-academy-partner-create-without-referral-campaigns.input';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';

@InputType()
export class DefinedAcademyPartnerUpsertWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyPartnerUpdateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutReferralCampaignsInput)
    update!: DefinedAcademyPartnerUpdateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyPartnerCreateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutReferralCampaignsInput)
    create!: DefinedAcademyPartnerCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;
}
