import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceUpdateWithoutReferralCampaignsInput } from './defined-academy-resource-update-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateWithoutReferralCampaignsInput } from './defined-academy-resource-create-without-referral-campaigns.input';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';

@InputType()
export class DefinedAcademyResourceUpsertWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyResourceUpdateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutReferralCampaignsInput)
    update!: DefinedAcademyResourceUpdateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyResourceCreateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutReferralCampaignsInput)
    create!: DefinedAcademyResourceCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;
}
