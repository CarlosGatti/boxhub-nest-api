import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleOrderByRelationAggregateInput } from '../defined-academy-module/defined-academy-module-order-by-relation-aggregate.input';
import { DefinedAcademyEnrollmentOrderByRelationAggregateInput } from '../defined-academy-enrollment/defined-academy-enrollment-order-by-relation-aggregate.input';
import { DefinedAcademyShortLinkOrderByRelationAggregateInput } from '../defined-academy-short-link/defined-academy-short-link-order-by-relation-aggregate.input';
import { DefinedAcademyReferralCampaignOrderByRelationAggregateInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyCourseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    summary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    coverImageUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    level?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    estimatedDurationMinutes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    createdBy?: UserOrderByWithRelationInput;

    @Field(() => DefinedAcademyModuleOrderByRelationAggregateInput, {nullable:true})
    modules?: DefinedAcademyModuleOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyEnrollmentOrderByRelationAggregateInput, {nullable:true})
    enrollments?: DefinedAcademyEnrollmentOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyShortLinkOrderByRelationAggregateInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignOrderByRelationAggregateInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignOrderByRelationAggregateInput;
}
