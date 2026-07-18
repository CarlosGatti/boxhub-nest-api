import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyShortLinkOrderByWithRelationInput } from '../defined-academy-short-link/defined-academy-short-link-order-by-with-relation.input';

@InputType()
export class DefinedAcademyShortLinkEventOrderByWithRelationInput {

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

    @Field(() => DefinedAcademyShortLinkOrderByWithRelationInput, {nullable:true})
    shortLink?: DefinedAcademyShortLinkOrderByWithRelationInput;
}
