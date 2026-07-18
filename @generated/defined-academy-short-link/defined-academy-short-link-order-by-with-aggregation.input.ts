import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyShortLinkCountOrderByAggregateInput } from './defined-academy-short-link-count-order-by-aggregate.input';
import { DefinedAcademyShortLinkAvgOrderByAggregateInput } from './defined-academy-short-link-avg-order-by-aggregate.input';
import { DefinedAcademyShortLinkMaxOrderByAggregateInput } from './defined-academy-short-link-max-order-by-aggregate.input';
import { DefinedAcademyShortLinkMinOrderByAggregateInput } from './defined-academy-short-link-min-order-by-aggregate.input';
import { DefinedAcademyShortLinkSumOrderByAggregateInput } from './defined-academy-short-link-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyShortLinkOrderByWithAggregationInput {

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

    @Field(() => DefinedAcademyShortLinkCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyShortLinkCountOrderByAggregateInput;

    @Field(() => DefinedAcademyShortLinkAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyShortLinkAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyShortLinkMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyShortLinkMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyShortLinkMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyShortLinkMinOrderByAggregateInput;

    @Field(() => DefinedAcademyShortLinkSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyShortLinkSumOrderByAggregateInput;
}
