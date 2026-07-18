import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignScalarWhereInput } from './defined-academy-referral-campaign-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignUpdateManyMutationInput } from './defined-academy-referral-campaign-update-many-mutation.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutPartnerInput {

    @Field(() => DefinedAcademyReferralCampaignScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignScalarWhereInput)
    where!: DefinedAcademyReferralCampaignScalarWhereInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateManyMutationInput)
    data!: DefinedAcademyReferralCampaignUpdateManyMutationInput;
}
