import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedLeadMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    fullName?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    companyName?: true;

    @Field(() => Boolean, {nullable:true})
    businessType?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    selectedPackage?: true;

    @Field(() => Boolean, {nullable:true})
    serviceInterest?: true;

    @Field(() => Boolean, {nullable:true})
    message?: true;

    @Field(() => Boolean, {nullable:true})
    landingSlug?: true;

    @Field(() => Boolean, {nullable:true})
    referrer?: true;

    @Field(() => Boolean, {nullable:true})
    utmSource?: true;

    @Field(() => Boolean, {nullable:true})
    utmMedium?: true;

    @Field(() => Boolean, {nullable:true})
    utmCampaign?: true;

    @Field(() => Boolean, {nullable:true})
    utmContent?: true;

    @Field(() => Boolean, {nullable:true})
    utmTerm?: true;

    @Field(() => Boolean, {nullable:true})
    gclid?: true;

    @Field(() => Boolean, {nullable:true})
    fbclid?: true;

    @Field(() => Boolean, {nullable:true})
    consent?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    notificationStatus?: true;

    @Field(() => Boolean, {nullable:true})
    crmSyncStatus?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
