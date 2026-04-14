import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedLeadStatus } from '../prisma/defined-lead-status.enum';
import { DefinedLeadNotificationStatus } from '../prisma/defined-lead-notification-status.enum';
import { DefinedLeadCrmSyncStatus } from '../prisma/defined-lead-crm-sync-status.enum';
import { DefinedLeadCountAggregate } from './defined-lead-count-aggregate.output';
import { DefinedLeadAvgAggregate } from './defined-lead-avg-aggregate.output';
import { DefinedLeadSumAggregate } from './defined-lead-sum-aggregate.output';
import { DefinedLeadMinAggregate } from './defined-lead-min-aggregate.output';
import { DefinedLeadMaxAggregate } from './defined-lead-max-aggregate.output';

@ObjectType()
export class DefinedLeadGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

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

    @Field(() => DefinedLeadStatus, {nullable:false})
    status!: keyof typeof DefinedLeadStatus;

    @Field(() => DefinedLeadNotificationStatus, {nullable:false})
    notificationStatus!: keyof typeof DefinedLeadNotificationStatus;

    @Field(() => DefinedLeadCrmSyncStatus, {nullable:false})
    crmSyncStatus!: keyof typeof DefinedLeadCrmSyncStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedLeadCountAggregate, {nullable:true})
    _count?: DefinedLeadCountAggregate;

    @Field(() => DefinedLeadAvgAggregate, {nullable:true})
    _avg?: DefinedLeadAvgAggregate;

    @Field(() => DefinedLeadSumAggregate, {nullable:true})
    _sum?: DefinedLeadSumAggregate;

    @Field(() => DefinedLeadMinAggregate, {nullable:true})
    _min?: DefinedLeadMinAggregate;

    @Field(() => DefinedLeadMaxAggregate, {nullable:true})
    _max?: DefinedLeadMaxAggregate;
}
