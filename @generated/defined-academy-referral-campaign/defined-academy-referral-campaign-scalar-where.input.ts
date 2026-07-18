import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyReferralSourceTypeFilter } from '../prisma/enum-defined-academy-referral-source-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumDefinedAcademyReferralCampaignStatusFilter } from '../prisma/enum-defined-academy-referral-campaign-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyReferralCampaignScalarWhereInput {

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyReferralCampaignScalarWhereInput>;

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyReferralCampaignScalarWhereInput>;

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyReferralCampaignScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyReferralSourceTypeFilter, {nullable:true})
    sourceType?: EnumDefinedAcademyReferralSourceTypeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    partnerId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    courseId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    resourceId?: IntNullableFilter;

    @Field(() => EnumDefinedAcademyReferralCampaignStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyReferralCampaignStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startsAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endsAt?: DateTimeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
