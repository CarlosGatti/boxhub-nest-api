import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { DefinedAcademyReferralCampaignOrderByWithRelationInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerOrderByWithRelationInput } from '../defined-academy-partner/defined-academy-partner-order-by-with-relation.input';

@InputType()
export class DefinedAcademyReferralOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    campaignId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referrerUserId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    partnerId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referredUserId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    referralCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstVisitedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    registeredAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    enrolledAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    attributionExpiresAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => DefinedAcademyReferralCampaignOrderByWithRelationInput, {nullable:true})
    campaign?: DefinedAcademyReferralCampaignOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    referrerUser?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    referredUser?: UserOrderByWithRelationInput;

    @Field(() => DefinedAcademyPartnerOrderByWithRelationInput, {nullable:true})
    partner?: DefinedAcademyPartnerOrderByWithRelationInput;
}
