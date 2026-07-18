import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedAcademyShortLinkEventMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shortLinkId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    occurredAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    anonymousSessionHash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referrer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userAgentSummary?: keyof typeof SortOrder;
}
