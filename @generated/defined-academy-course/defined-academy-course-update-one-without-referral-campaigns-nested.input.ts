import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutReferralCampaignsInput } from './defined-academy-course-create-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput } from './defined-academy-course-create-or-connect-without-referral-campaigns.input';
import { DefinedAcademyCourseUpsertWithoutReferralCampaignsInput } from './defined-academy-course-upsert-without-referral-campaigns.input';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { DefinedAcademyCourseUpdateToOneWithWhereWithoutReferralCampaignsInput } from './defined-academy-course-update-to-one-with-where-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyCourseUpdateOneWithoutReferralCampaignsNestedInput {

    @Field(() => DefinedAcademyCourseCreateWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutReferralCampaignsInput)
    create?: DefinedAcademyCourseCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCourseUpsertWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpsertWithoutReferralCampaignsInput)
    upsert?: DefinedAcademyCourseUpsertWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    disconnect?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    delete?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutReferralCampaignsInput)
    update?: DefinedAcademyCourseUpdateToOneWithWhereWithoutReferralCampaignsInput;
}
