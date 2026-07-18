import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedAcademyShortLinkSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    partnerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referralCampaignId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visitCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;
}
