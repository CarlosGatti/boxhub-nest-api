import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateWithoutCourseInput } from './defined-academy-referral-campaign-create-without-course.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutCourseInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutCourseInput;
}
