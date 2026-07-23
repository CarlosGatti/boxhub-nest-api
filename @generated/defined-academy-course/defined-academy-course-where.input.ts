import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyCourseStatusFilter } from '../prisma/enum-defined-academy-course-status-filter.input';
import { EnumDefinedAcademyCourseVisibilityFilter } from '../prisma/enum-defined-academy-course-visibility-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleListRelationFilter } from '../defined-academy-module/defined-academy-module-list-relation-filter.input';
import { DefinedAcademyEnrollmentListRelationFilter } from '../defined-academy-enrollment/defined-academy-enrollment-list-relation-filter.input';
import { DefinedAcademyShortLinkListRelationFilter } from '../defined-academy-short-link/defined-academy-short-link-list-relation-filter.input';
import { DefinedAcademyReferralCampaignListRelationFilter } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-list-relation-filter.input';
import { DefinedAcademyCareerStageContentListRelationFilter } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-list-relation-filter.input';

@InputType()
export class DefinedAcademyCourseWhereInput {

    @Field(() => [DefinedAcademyCourseWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyCourseWhereInput>;

    @Field(() => [DefinedAcademyCourseWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyCourseWhereInput>;

    @Field(() => [DefinedAcademyCourseWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyCourseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    summary?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    coverImageUrl?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyCourseStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyCourseStatusFilter;

    @Field(() => EnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    level?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    estimatedDurationMinutes?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    createdById?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    createdBy?: UserNullableRelationFilter;

    @Field(() => DefinedAcademyModuleListRelationFilter, {nullable:true})
    modules?: DefinedAcademyModuleListRelationFilter;

    @Field(() => DefinedAcademyEnrollmentListRelationFilter, {nullable:true})
    enrollments?: DefinedAcademyEnrollmentListRelationFilter;

    @Field(() => DefinedAcademyShortLinkListRelationFilter, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkListRelationFilter;

    @Field(() => DefinedAcademyReferralCampaignListRelationFilter, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignListRelationFilter;

    @Field(() => DefinedAcademyCareerStageContentListRelationFilter, {nullable:true})
    careerStageLinks?: DefinedAcademyCareerStageContentListRelationFilter;
}
