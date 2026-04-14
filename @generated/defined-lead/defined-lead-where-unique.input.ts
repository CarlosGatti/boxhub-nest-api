import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedLeadWhereInput } from './defined-lead-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumDefinedLeadStatusFilter } from '../prisma/enum-defined-lead-status-filter.input';
import { EnumDefinedLeadNotificationStatusFilter } from '../prisma/enum-defined-lead-notification-status-filter.input';
import { EnumDefinedLeadCrmSyncStatusFilter } from '../prisma/enum-defined-lead-crm-sync-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedLeadWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedLeadWhereInput], {nullable:true})
    AND?: Array<DefinedLeadWhereInput>;

    @Field(() => [DefinedLeadWhereInput], {nullable:true})
    OR?: Array<DefinedLeadWhereInput>;

    @Field(() => [DefinedLeadWhereInput], {nullable:true})
    NOT?: Array<DefinedLeadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    fullName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    businessType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    selectedPackage?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    serviceInterest?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    landingSlug?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referrer?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utmSource?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utmMedium?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utmCampaign?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utmContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utmTerm?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gclid?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fbclid?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    consent?: BoolFilter;

    @Field(() => EnumDefinedLeadStatusFilter, {nullable:true})
    status?: EnumDefinedLeadStatusFilter;

    @Field(() => EnumDefinedLeadNotificationStatusFilter, {nullable:true})
    notificationStatus?: EnumDefinedLeadNotificationStatusFilter;

    @Field(() => EnumDefinedLeadCrmSyncStatusFilter, {nullable:true})
    crmSyncStatus?: EnumDefinedLeadCrmSyncStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
