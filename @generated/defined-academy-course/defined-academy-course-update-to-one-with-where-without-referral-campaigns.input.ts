import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseUpdateWithoutReferralCampaignsInput } from './defined-academy-course-update-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyCourseUpdateToOneWithWhereWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseUpdateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutReferralCampaignsInput)
    data!: DefinedAcademyCourseUpdateWithoutReferralCampaignsInput;
}
