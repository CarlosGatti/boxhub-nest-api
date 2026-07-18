import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedAcademyReferralSumOrderByAggregateInput {

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
}
