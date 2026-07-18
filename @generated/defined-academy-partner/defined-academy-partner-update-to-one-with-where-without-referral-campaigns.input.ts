import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerUpdateWithoutReferralCampaignsInput } from './defined-academy-partner-update-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerUpdateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutReferralCampaignsInput)
    data!: DefinedAcademyPartnerUpdateWithoutReferralCampaignsInput;
}
