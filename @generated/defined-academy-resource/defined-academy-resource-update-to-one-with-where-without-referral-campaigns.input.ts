import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceUpdateWithoutReferralCampaignsInput } from './defined-academy-resource-update-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyResourceUpdateToOneWithWhereWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceUpdateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutReferralCampaignsInput)
    data!: DefinedAcademyResourceUpdateWithoutReferralCampaignsInput;
}
