import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDefinedAcademyReferralStatusFilter } from '../prisma/enum-defined-academy-referral-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class DefinedAcademyReferralScalarWhereInput {

    @Field(() => [DefinedAcademyReferralScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyReferralScalarWhereInput>;

    @Field(() => [DefinedAcademyReferralScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyReferralScalarWhereInput>;

    @Field(() => [DefinedAcademyReferralScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyReferralScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    campaignId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    referrerUserId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    partnerId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    referredUserId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    referralCode?: StringFilter;

    @Field(() => EnumDefinedAcademyReferralStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyReferralStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    firstVisitedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    registeredAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    enrolledAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    attributionExpiresAt?: DateTimeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
