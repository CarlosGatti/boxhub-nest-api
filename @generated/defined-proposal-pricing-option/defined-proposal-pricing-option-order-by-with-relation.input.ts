import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { DefinedProposalOrderByWithRelationInput } from '../defined-proposal/defined-proposal-order-by-with-relation.input';

@InputType()
export class DefinedProposalPricingOptionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    proposalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    amount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    billingNote?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    features?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isRecommended?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedProposalOrderByWithRelationInput, {nullable:true})
    @Type(() => DefinedProposalOrderByWithRelationInput)
    proposal?: DefinedProposalOrderByWithRelationInput;
}
