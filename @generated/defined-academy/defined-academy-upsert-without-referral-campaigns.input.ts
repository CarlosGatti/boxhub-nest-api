import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutReferralCampaignsInput } from './defined-academy-update-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutReferralCampaignsInput } from './defined-academy-create-without-referral-campaigns.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyUpdateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutReferralCampaignsInput)
    update!: DefinedAcademyUpdateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCreateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutReferralCampaignsInput)
    create!: DefinedAcademyCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
