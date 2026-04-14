import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedLeadMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    companyName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    businessType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    selectedPackage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceInterest?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    landingSlug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referrer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utmSource?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utmMedium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utmCampaign?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utmContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utmTerm?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gclid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fbclid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    consent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notificationStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    crmSyncStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
