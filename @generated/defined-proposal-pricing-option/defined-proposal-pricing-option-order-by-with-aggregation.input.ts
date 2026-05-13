import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionCountOrderByAggregateInput } from './defined-proposal-pricing-option-count-order-by-aggregate.input';
import { DefinedProposalPricingOptionAvgOrderByAggregateInput } from './defined-proposal-pricing-option-avg-order-by-aggregate.input';
import { DefinedProposalPricingOptionMaxOrderByAggregateInput } from './defined-proposal-pricing-option-max-order-by-aggregate.input';
import { DefinedProposalPricingOptionMinOrderByAggregateInput } from './defined-proposal-pricing-option-min-order-by-aggregate.input';
import { DefinedProposalPricingOptionSumOrderByAggregateInput } from './defined-proposal-pricing-option-sum-order-by-aggregate.input';

@InputType()
export class DefinedProposalPricingOptionOrderByWithAggregationInput {

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

    @Field(() => DefinedProposalPricingOptionCountOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionCountOrderByAggregateInput)
    _count?: DefinedProposalPricingOptionCountOrderByAggregateInput;

    @Field(() => DefinedProposalPricingOptionAvgOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionAvgOrderByAggregateInput)
    _avg?: DefinedProposalPricingOptionAvgOrderByAggregateInput;

    @Field(() => DefinedProposalPricingOptionMaxOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionMaxOrderByAggregateInput)
    _max?: DefinedProposalPricingOptionMaxOrderByAggregateInput;

    @Field(() => DefinedProposalPricingOptionMinOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionMinOrderByAggregateInput)
    _min?: DefinedProposalPricingOptionMinOrderByAggregateInput;

    @Field(() => DefinedProposalPricingOptionSumOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionSumOrderByAggregateInput)
    _sum?: DefinedProposalPricingOptionSumOrderByAggregateInput;
}
