import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutReferralCampaignsInput } from './defined-academy-update-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutReferralCampaignsInput)
    data!: DefinedAcademyUpdateWithoutReferralCampaignsInput;
}
