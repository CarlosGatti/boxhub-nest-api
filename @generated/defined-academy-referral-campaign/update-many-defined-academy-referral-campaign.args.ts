import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignUpdateManyMutationInput } from './defined-academy-referral-campaign-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyReferralCampaignArgs {

    @Field(() => DefinedAcademyReferralCampaignUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateManyMutationInput)
    data!: DefinedAcademyReferralCampaignUpdateManyMutationInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    where?: DefinedAcademyReferralCampaignWhereInput;
}
