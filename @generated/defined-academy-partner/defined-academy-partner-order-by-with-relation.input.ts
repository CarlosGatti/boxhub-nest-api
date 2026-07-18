import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { DefinedAcademyPartnerCategoryOrderByWithRelationInput } from '../defined-academy-partner-category/defined-academy-partner-category-order-by-with-relation.input';
import { DefinedAcademyShortLinkOrderByRelationAggregateInput } from '../defined-academy-short-link/defined-academy-short-link-order-by-relation-aggregate.input';
import { DefinedAcademyReferralCampaignOrderByRelationAggregateInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-order-by-relation-aggregate.input';
import { DefinedAcademyReferralOrderByRelationAggregateInput } from '../defined-academy-referral/defined-academy-referral-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyPartnerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    categoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    websiteUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contactUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    logoUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    location?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    featured?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => DefinedAcademyPartnerCategoryOrderByWithRelationInput, {nullable:true})
    category?: DefinedAcademyPartnerCategoryOrderByWithRelationInput;

    @Field(() => DefinedAcademyShortLinkOrderByRelationAggregateInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignOrderByRelationAggregateInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyReferralOrderByRelationAggregateInput, {nullable:true})
    referrals?: DefinedAcademyReferralOrderByRelationAggregateInput;
}
