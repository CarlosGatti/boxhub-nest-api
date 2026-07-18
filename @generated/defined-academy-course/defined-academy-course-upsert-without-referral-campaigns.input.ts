import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseUpdateWithoutReferralCampaignsInput } from './defined-academy-course-update-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutReferralCampaignsInput } from './defined-academy-course-create-without-referral-campaigns.input';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';

@InputType()
export class DefinedAcademyCourseUpsertWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyCourseUpdateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutReferralCampaignsInput)
    update!: DefinedAcademyCourseUpdateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCourseCreateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutReferralCampaignsInput)
    create!: DefinedAcademyCourseCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;
}
