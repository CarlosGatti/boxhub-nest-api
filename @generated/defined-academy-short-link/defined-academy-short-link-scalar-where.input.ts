import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumDefinedAcademyShortLinkStatusFilter } from '../prisma/enum-defined-academy-short-link-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyShortLinkScalarWhereInput {

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyShortLinkScalarWhereInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyShortLinkScalarWhereInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyShortLinkScalarWhereInput>;

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
}
