import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { DefinedAcademyPartnerOrderByWithRelationInput } from '../defined-academy-partner/defined-academy-partner-order-by-with-relation.input';
import { DefinedAcademyCourseOrderByWithRelationInput } from '../defined-academy-course/defined-academy-course-order-by-with-relation.input';
import { DefinedAcademyResourceOrderByWithRelationInput } from '../defined-academy-resource/defined-academy-resource-order-by-with-relation.input';
import { DefinedAcademyShortLinkOrderByRelationAggregateInput } from '../defined-academy-short-link/defined-academy-short-link-order-by-relation-aggregate.input';
import { DefinedAcademyReferralOrderByRelationAggregateInput } from '../defined-academy-referral/defined-academy-referral-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyReferralCampaignOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sourceType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    partnerId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    courseId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resourceId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    startsAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    endsAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => DefinedAcademyPartnerOrderByWithRelationInput, {nullable:true})
    partner?: DefinedAcademyPartnerOrderByWithRelationInput;

    @Field(() => DefinedAcademyCourseOrderByWithRelationInput, {nullable:true})
    course?: DefinedAcademyCourseOrderByWithRelationInput;

    @Field(() => DefinedAcademyResourceOrderByWithRelationInput, {nullable:true})
    resource?: DefinedAcademyResourceOrderByWithRelationInput;

    @Field(() => DefinedAcademyShortLinkOrderByRelationAggregateInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyReferralOrderByRelationAggregateInput, {nullable:true})
    referrals?: DefinedAcademyReferralOrderByRelationAggregateInput;
}
