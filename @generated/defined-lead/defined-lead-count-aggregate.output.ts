import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedLeadCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    fullName!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    companyName!: number;

    @Field(() => Int, {nullable:false})
    businessType!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    selectedPackage!: number;

    @Field(() => Int, {nullable:false})
    serviceInterest!: number;

    @Field(() => Int, {nullable:false})
    message!: number;

    @Field(() => Int, {nullable:false})
    landingSlug!: number;

    @Field(() => Int, {nullable:false})
    referrer!: number;

    @Field(() => Int, {nullable:false})
    utmSource!: number;

    @Field(() => Int, {nullable:false})
    utmMedium!: number;

    @Field(() => Int, {nullable:false})
    utmCampaign!: number;

    @Field(() => Int, {nullable:false})
    utmContent!: number;

    @Field(() => Int, {nullable:false})
    utmTerm!: number;

    @Field(() => Int, {nullable:false})
    gclid!: number;

    @Field(() => Int, {nullable:false})
    fbclid!: number;

    @Field(() => Int, {nullable:false})
    consent!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    notificationStatus!: number;

    @Field(() => Int, {nullable:false})
    crmSyncStatus!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
