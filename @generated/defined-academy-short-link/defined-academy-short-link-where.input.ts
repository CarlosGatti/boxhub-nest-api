import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumDefinedAcademyShortLinkStatusFilter } from '../prisma/enum-defined-academy-short-link-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyResourceNullableRelationFilter } from '../defined-academy-resource/defined-academy-resource-nullable-relation-filter.input';
import { DefinedAcademyCourseNullableRelationFilter } from '../defined-academy-course/defined-academy-course-nullable-relation-filter.input';
import { DefinedAcademyPartnerNullableRelationFilter } from '../defined-academy-partner/defined-academy-partner-nullable-relation-filter.input';
import { DefinedAcademyReferralCampaignNullableRelationFilter } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventListRelationFilter } from '../defined-academy-short-link-event/defined-academy-short-link-event-list-relation-filter.input';

@InputType()
export class DefinedAcademyShortLinkWhereInput {

    @Field(() => [DefinedAcademyShortLinkWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyShortLinkWhereInput>;

    @Field(() => [DefinedAcademyShortLinkWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyShortLinkWhereInput>;

    @Field(() => [DefinedAcademyShortLinkWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyShortLinkWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    destinationUrl?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    resourceId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    courseId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    partnerId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    referralCampaignId?: IntNullableFilter;

    @Field(() => EnumDefinedAcademyShortLinkStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyShortLinkStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    visitCount?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    createdById?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => DefinedAcademyResourceNullableRelationFilter, {nullable:true})
    resource?: DefinedAcademyResourceNullableRelationFilter;

    @Field(() => DefinedAcademyCourseNullableRelationFilter, {nullable:true})
    course?: DefinedAcademyCourseNullableRelationFilter;

    @Field(() => DefinedAcademyPartnerNullableRelationFilter, {nullable:true})
    partner?: DefinedAcademyPartnerNullableRelationFilter;

    @Field(() => DefinedAcademyReferralCampaignNullableRelationFilter, {nullable:true})
    referralCampaign?: DefinedAcademyReferralCampaignNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    createdBy?: UserNullableRelationFilter;

    @Field(() => DefinedAcademyShortLinkEventListRelationFilter, {nullable:true})
    events?: DefinedAcademyShortLinkEventListRelationFilter;
}
