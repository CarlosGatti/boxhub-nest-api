import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class DefinedLeadOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    companyName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    businessType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    state?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    selectedPackage?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    serviceInterest?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    landingSlug?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referrer?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    utmSource?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    utmMedium?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    utmCampaign?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    utmContent?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    utmTerm?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    gclid?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fbclid?: SortOrderInput;

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
