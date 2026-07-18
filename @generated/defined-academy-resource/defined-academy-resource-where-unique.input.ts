import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyResourceTypeFilter } from '../prisma/enum-defined-academy-resource-type-filter.input';
import { EnumDefinedAcademyCourseVisibilityFilter } from '../prisma/enum-defined-academy-course-visibility-filter.input';
import { EnumDefinedAcademyResourceStatusFilter } from '../prisma/enum-defined-academy-resource-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyLessonNullableRelationFilter } from '../defined-academy-lesson/defined-academy-lesson-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkListRelationFilter } from '../defined-academy-short-link/defined-academy-short-link-list-relation-filter.input';
import { DefinedAcademyReferralCampaignListRelationFilter } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-list-relation-filter.input';

@InputType()
export class DefinedAcademyResourceWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedAcademyResourceWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyResourceWhereInput>;

    @Field(() => [DefinedAcademyResourceWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyResourceWhereInput>;

    @Field(() => [DefinedAcademyResourceWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyResourceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    lessonId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyResourceTypeFilter, {nullable:true})
    type?: EnumDefinedAcademyResourceTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fileUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    externalUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    textContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mimeType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fileName?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fileSize?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => EnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityFilter;

    @Field(() => EnumDefinedAcademyResourceStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyResourceStatusFilter;

    @Field(() => BoolFilter, {nullable:true})
    downloadable?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    createdById?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => DefinedAcademyLessonNullableRelationFilter, {nullable:true})
    lesson?: DefinedAcademyLessonNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    createdBy?: UserNullableRelationFilter;

    @Field(() => DefinedAcademyShortLinkListRelationFilter, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkListRelationFilter;

    @Field(() => DefinedAcademyReferralCampaignListRelationFilter, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignListRelationFilter;
}
