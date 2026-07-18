import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignUpdateWithoutCourseInput } from './defined-academy-referral-campaign-update-without-course.input';
import { DefinedAcademyReferralCampaignCreateWithoutCourseInput } from './defined-academy-referral-campaign-create-without-course.input';

@InputType()
export class DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutCourseInput)
    update!: DefinedAcademyReferralCampaignUpdateWithoutCourseInput;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutCourseInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutCourseInput;
}
