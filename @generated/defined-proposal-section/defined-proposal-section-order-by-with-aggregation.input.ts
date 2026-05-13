import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedProposalSectionCountOrderByAggregateInput } from './defined-proposal-section-count-order-by-aggregate.input';
import { DefinedProposalSectionAvgOrderByAggregateInput } from './defined-proposal-section-avg-order-by-aggregate.input';
import { DefinedProposalSectionMaxOrderByAggregateInput } from './defined-proposal-section-max-order-by-aggregate.input';
import { DefinedProposalSectionMinOrderByAggregateInput } from './defined-proposal-section-min-order-by-aggregate.input';
import { DefinedProposalSectionSumOrderByAggregateInput } from './defined-proposal-section-sum-order-by-aggregate.input';

@InputType()
export class DefinedProposalSectionOrderByWithAggregationInput {

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

    @Field(() => DefinedProposalSectionCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedProposalSectionCountOrderByAggregateInput;

    @Field(() => DefinedProposalSectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedProposalSectionAvgOrderByAggregateInput;

    @Field(() => DefinedProposalSectionMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedProposalSectionMaxOrderByAggregateInput;

    @Field(() => DefinedProposalSectionMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedProposalSectionMinOrderByAggregateInput;

    @Field(() => DefinedProposalSectionSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedProposalSectionSumOrderByAggregateInput;
}
