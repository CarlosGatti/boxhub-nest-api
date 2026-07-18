import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutCourseInput } from './defined-academy-referral-campaign-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput } from './defined-academy-referral-campaign-create-or-connect-without-course.input';
import { DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutCourseInput } from './defined-academy-referral-campaign-upsert-with-where-unique-without-course.input';
import { DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope } from './defined-academy-referral-campaign-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutCourseInput } from './defined-academy-referral-campaign-update-with-where-unique-without-course.input';
import { DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutCourseInput } from './defined-academy-referral-campaign-update-many-with-where-without-course.input';
import { DefinedAcademyReferralCampaignScalarWhereInput } from './defined-academy-referral-campaign-scalar-where.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateManyWithoutCourseNestedInput {

    @Field(() => [DefinedAcademyReferralCampaignCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutCourseInput)
    create?: Array<DefinedAcademyReferralCampaignCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyReferralCampaignCreateOrConnectWithoutCourseInput>;

    @Field(() => [DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutCourseInput)
    upsert?: Array<DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyReferralCampaignCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutCourseInput)
    update?: Array<DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutCourseInput)
    updateMany?: Array<DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralCampaignScalarWhereInput>;
}
