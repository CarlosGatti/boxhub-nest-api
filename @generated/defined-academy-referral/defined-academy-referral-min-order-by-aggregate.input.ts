import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedAcademyReferralMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    campaignId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referrerUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    partnerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referredUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referralCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstVisitedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registeredAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enrolledAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    attributionExpiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
