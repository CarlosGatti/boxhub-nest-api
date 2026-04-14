import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DefinedLeadStatus } from '../prisma/defined-lead-status.enum';
import { DefinedLeadNotificationStatus } from '../prisma/defined-lead-notification-status.enum';
import { DefinedLeadCrmSyncStatus } from '../prisma/defined-lead-crm-sync-status.enum';

@ObjectType()
export class DefinedLead {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    companyName!: string | null;

    @Field(() => String, {nullable:true})
    businessType!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => String, {nullable:true})
    state!: string | null;

    @Field(() => String, {nullable:true})
    selectedPackage!: string | null;

    @Field(() => String, {nullable:true})
    serviceInterest!: string | null;

    @Field(() => String, {nullable:true})
    message!: string | null;

    @Field(() => String, {nullable:true})
    landingSlug!: string | null;

    @Field(() => String, {nullable:true})
    referrer!: string | null;

    @Field(() => String, {nullable:true})
    utmSource!: string | null;

    @Field(() => String, {nullable:true})
    utmMedium!: string | null;

    @Field(() => String, {nullable:true})
    utmCampaign!: string | null;

    @Field(() => String, {nullable:true})
    utmContent!: string | null;

    @Field(() => String, {nullable:true})
    utmTerm!: string | null;

    @Field(() => String, {nullable:true})
    gclid!: string | null;

    @Field(() => String, {nullable:true})
    fbclid!: string | null;

    @Field(() => Boolean, {nullable:false})
    consent!: boolean;

    @Field(() => DefinedLeadStatus, {nullable:false,defaultValue:'STORED'})
    status!: keyof typeof DefinedLeadStatus;

    @Field(() => DefinedLeadNotificationStatus, {nullable:false,defaultValue:'PENDING'})
    notificationStatus!: keyof typeof DefinedLeadNotificationStatus;

    @Field(() => DefinedLeadCrmSyncStatus, {nullable:false,defaultValue:'PENDING'})
    crmSyncStatus!: keyof typeof DefinedLeadCrmSyncStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
