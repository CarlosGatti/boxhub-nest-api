import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateManyCourseInput } from './defined-academy-referral-campaign-create-many-course.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope {

    @Field(() => [DefinedAcademyReferralCampaignCreateManyCourseInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateManyCourseInput)
    data!: Array<DefinedAcademyReferralCampaignCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
