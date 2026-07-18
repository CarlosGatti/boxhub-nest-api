import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { DefinedAcademyResourceOrderByWithRelationInput } from '../defined-academy-resource/defined-academy-resource-order-by-with-relation.input';
import { DefinedAcademyCourseOrderByWithRelationInput } from '../defined-academy-course/defined-academy-course-order-by-with-relation.input';
import { DefinedAcademyPartnerOrderByWithRelationInput } from '../defined-academy-partner/defined-academy-partner-order-by-with-relation.input';
import { DefinedAcademyReferralCampaignOrderByWithRelationInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventOrderByRelationAggregateInput } from '../defined-academy-short-link-event/defined-academy-short-link-event-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyShortLinkOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    destinationUrl?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    resourceId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    courseId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    partnerId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referralCampaignId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    expiresAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    visitCount?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => DefinedAcademyResourceOrderByWithRelationInput, {nullable:true})
    resource?: DefinedAcademyResourceOrderByWithRelationInput;

    @Field(() => DefinedAcademyCourseOrderByWithRelationInput, {nullable:true})
    course?: DefinedAcademyCourseOrderByWithRelationInput;

    @Field(() => DefinedAcademyPartnerOrderByWithRelationInput, {nullable:true})
    partner?: DefinedAcademyPartnerOrderByWithRelationInput;

    @Field(() => DefinedAcademyReferralCampaignOrderByWithRelationInput, {nullable:true})
    referralCampaign?: DefinedAcademyReferralCampaignOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    createdBy?: UserOrderByWithRelationInput;

    @Field(() => DefinedAcademyShortLinkEventOrderByRelationAggregateInput, {nullable:true})
    events?: DefinedAcademyShortLinkEventOrderByRelationAggregateInput;
}
