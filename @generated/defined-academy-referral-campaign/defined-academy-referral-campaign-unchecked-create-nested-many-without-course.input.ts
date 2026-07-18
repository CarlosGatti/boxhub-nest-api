import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutCourseInput } from './defined-academy-referral-campaign-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput } from './defined-academy-referral-campaign-create-or-connect-without-course.input';
import { DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope } from './defined-academy-referral-campaign-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';

@InputType()
export class DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutCourseInput {

    @Field(() => [DefinedAcademyReferralCampaignCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutCourseInput)
    create?: Array<DefinedAcademyReferralCampaignCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput>;

    @Field(() => DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;
}
