import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AppOrderByWithRelationInput } from '../app/app-order-by-with-relation.input';
import { DefinedAcademyCourseOrderByRelationAggregateInput } from '../defined-academy-course/defined-academy-course-order-by-relation-aggregate.input';
import { DefinedAcademyResourceOrderByRelationAggregateInput } from '../defined-academy-resource/defined-academy-resource-order-by-relation-aggregate.input';
import { DefinedAcademyPartnerOrderByRelationAggregateInput } from '../defined-academy-partner/defined-academy-partner-order-by-relation-aggregate.input';
import { DefinedAcademyPartnerCategoryOrderByRelationAggregateInput } from '../defined-academy-partner-category/defined-academy-partner-category-order-by-relation-aggregate.input';
import { DefinedAcademyShortLinkOrderByRelationAggregateInput } from '../defined-academy-short-link/defined-academy-short-link-order-by-relation-aggregate.input';
import { DefinedAcademyReferralCampaignOrderByRelationAggregateInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-order-by-relation-aggregate.input';
import { DefinedAcademyReferralOrderByRelationAggregateInput } from '../defined-academy-referral/defined-academy-referral-order-by-relation-aggregate.input';
import { DefinedAcademyCareerJourneyOrderByWithRelationInput } from '../defined-academy-career-journey/defined-academy-career-journey-order-by-with-relation.input';
import { DefinedAcademyUserCareerProfileOrderByRelationAggregateInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    appId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    logoUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    settings?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    archivedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AppOrderByWithRelationInput, {nullable:true})
    app?: AppOrderByWithRelationInput;

    @Field(() => DefinedAcademyCourseOrderByRelationAggregateInput, {nullable:true})
    courses?: DefinedAcademyCourseOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyResourceOrderByRelationAggregateInput, {nullable:true})
    resources?: DefinedAcademyResourceOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyPartnerOrderByRelationAggregateInput, {nullable:true})
    partners?: DefinedAcademyPartnerOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyPartnerCategoryOrderByRelationAggregateInput, {nullable:true})
    partnerCategories?: DefinedAcademyPartnerCategoryOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyShortLinkOrderByRelationAggregateInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignOrderByRelationAggregateInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyReferralOrderByRelationAggregateInput, {nullable:true})
    referrals?: DefinedAcademyReferralOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyCareerJourneyOrderByWithRelationInput, {nullable:true})
    careerJourney?: DefinedAcademyCareerJourneyOrderByWithRelationInput;

    @Field(() => DefinedAcademyUserCareerProfileOrderByRelationAggregateInput, {nullable:true})
    careerProfiles?: DefinedAcademyUserCareerProfileOrderByRelationAggregateInput;
}
