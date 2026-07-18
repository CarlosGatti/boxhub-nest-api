import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { DefinedAcademyLessonOrderByWithRelationInput } from '../defined-academy-lesson/defined-academy-lesson-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkOrderByRelationAggregateInput } from '../defined-academy-short-link/defined-academy-short-link-order-by-relation-aggregate.input';
import { DefinedAcademyReferralCampaignOrderByRelationAggregateInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyResourceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    lessonId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    fileUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    externalUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    textContent?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mimeType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fileName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fileSize?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    downloadable?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => DefinedAcademyLessonOrderByWithRelationInput, {nullable:true})
    lesson?: DefinedAcademyLessonOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    createdBy?: UserOrderByWithRelationInput;

    @Field(() => DefinedAcademyShortLinkOrderByRelationAggregateInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyReferralCampaignOrderByRelationAggregateInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignOrderByRelationAggregateInput;
}
