import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedProposalCountOrderByAggregateInput } from './defined-proposal-count-order-by-aggregate.input';
import { DefinedProposalAvgOrderByAggregateInput } from './defined-proposal-avg-order-by-aggregate.input';
import { DefinedProposalMaxOrderByAggregateInput } from './defined-proposal-max-order-by-aggregate.input';
import { DefinedProposalMinOrderByAggregateInput } from './defined-proposal-min-order-by-aggregate.input';
import { DefinedProposalSumOrderByAggregateInput } from './defined-proposal-sum-order-by-aggregate.input';

@InputType()
export class DefinedProposalOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subtitle?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    summary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contentJson?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    shareToken?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareTokenCreatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareTokenExpiresAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareRevokedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sentAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    viewedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approvedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    declinedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedProposalCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedProposalCountOrderByAggregateInput;

    @Field(() => DefinedProposalAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedProposalAvgOrderByAggregateInput;

    @Field(() => DefinedProposalMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedProposalMaxOrderByAggregateInput;

    @Field(() => DefinedProposalMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedProposalMinOrderByAggregateInput;

    @Field(() => DefinedProposalSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedProposalSumOrderByAggregateInput;
}
