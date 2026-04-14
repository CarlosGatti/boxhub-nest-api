import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumDefinedLeadStatusWithAggregatesFilter } from '../prisma/enum-defined-lead-status-with-aggregates-filter.input';
import { EnumDefinedLeadNotificationStatusWithAggregatesFilter } from '../prisma/enum-defined-lead-notification-status-with-aggregates-filter.input';
import { EnumDefinedLeadCrmSyncStatusWithAggregatesFilter } from '../prisma/enum-defined-lead-crm-sync-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedLeadScalarWhereWithAggregatesInput {

    @Field(() => [DefinedLeadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedLeadScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedLeadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedLeadScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedLeadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedLeadScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fullName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phone?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    companyName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    businessType?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    city?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    state?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    selectedPackage?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    serviceInterest?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    message?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    landingSlug?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    referrer?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    utmSource?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    utmMedium?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    utmCampaign?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    utmContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    utmTerm?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    gclid?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fbclid?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    consent?: BoolWithAggregatesFilter;

    @Field(() => EnumDefinedLeadStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedLeadStatusWithAggregatesFilter;

    @Field(() => EnumDefinedLeadNotificationStatusWithAggregatesFilter, {nullable:true})
    notificationStatus?: EnumDefinedLeadNotificationStatusWithAggregatesFilter;

    @Field(() => EnumDefinedLeadCrmSyncStatusWithAggregatesFilter, {nullable:true})
    crmSyncStatus?: EnumDefinedLeadCrmSyncStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
