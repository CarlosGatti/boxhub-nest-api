import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyShortLinkEventCountOrderByAggregateInput } from './defined-academy-short-link-event-count-order-by-aggregate.input';
import { DefinedAcademyShortLinkEventAvgOrderByAggregateInput } from './defined-academy-short-link-event-avg-order-by-aggregate.input';
import { DefinedAcademyShortLinkEventMaxOrderByAggregateInput } from './defined-academy-short-link-event-max-order-by-aggregate.input';
import { DefinedAcademyShortLinkEventMinOrderByAggregateInput } from './defined-academy-short-link-event-min-order-by-aggregate.input';
import { DefinedAcademyShortLinkEventSumOrderByAggregateInput } from './defined-academy-short-link-event-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyShortLinkEventOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shortLinkId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    occurredAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    anonymousSessionHash?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referrer?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userAgentSummary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    campaignMetadata?: SortOrderInput;

    @Field(() => DefinedAcademyShortLinkEventCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyShortLinkEventCountOrderByAggregateInput;

    @Field(() => DefinedAcademyShortLinkEventAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyShortLinkEventAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyShortLinkEventMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyShortLinkEventMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyShortLinkEventMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyShortLinkEventMinOrderByAggregateInput;

    @Field(() => DefinedAcademyShortLinkEventSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyShortLinkEventSumOrderByAggregateInput;
}
