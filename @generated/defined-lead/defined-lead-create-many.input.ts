import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedLeadStatus } from '../prisma/defined-lead-status.enum';
import { DefinedLeadNotificationStatus } from '../prisma/defined-lead-notification-status.enum';
import { DefinedLeadCrmSyncStatus } from '../prisma/defined-lead-crm-sync-status.enum';

@InputType()
export class DefinedLeadCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    companyName?: string;

    @Field(() => String, {nullable:true})
    businessType?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    selectedPackage?: string;

    @Field(() => String, {nullable:true})
    serviceInterest?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    landingSlug?: string;

    @Field(() => String, {nullable:true})
    referrer?: string;

    @Field(() => String, {nullable:true})
    utmSource?: string;

    @Field(() => String, {nullable:true})
    utmMedium?: string;

    @Field(() => String, {nullable:true})
    utmCampaign?: string;

    @Field(() => String, {nullable:true})
    utmContent?: string;

    @Field(() => String, {nullable:true})
    utmTerm?: string;

    @Field(() => String, {nullable:true})
    gclid?: string;

    @Field(() => String, {nullable:true})
    fbclid?: string;

    @Field(() => Boolean, {nullable:false})
    consent!: boolean;

    @Field(() => DefinedLeadStatus, {nullable:true})
    status?: keyof typeof DefinedLeadStatus;

    @Field(() => DefinedLeadNotificationStatus, {nullable:true})
    notificationStatus?: keyof typeof DefinedLeadNotificationStatus;

    @Field(() => DefinedLeadCrmSyncStatus, {nullable:true})
    crmSyncStatus?: keyof typeof DefinedLeadCrmSyncStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
