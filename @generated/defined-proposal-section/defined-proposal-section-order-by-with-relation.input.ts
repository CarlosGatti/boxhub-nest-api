import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedProposalOrderByWithRelationInput } from '../defined-proposal/defined-proposal-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalSectionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    proposalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    body?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contentJson?: SortOrderInput;

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
