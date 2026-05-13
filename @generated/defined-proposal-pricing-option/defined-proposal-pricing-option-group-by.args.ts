import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionWhereInput } from './defined-proposal-pricing-option-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionOrderByWithAggregationInput } from './defined-proposal-pricing-option-order-by-with-aggregation.input';
import { DefinedProposalPricingOptionScalarFieldEnum } from './defined-proposal-pricing-option-scalar-field.enum';
import { DefinedProposalPricingOptionScalarWhereWithAggregatesInput } from './defined-proposal-pricing-option-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedProposalPricingOptionCountAggregateInput } from './defined-proposal-pricing-option-count-aggregate.input';
import { DefinedProposalPricingOptionAvgAggregateInput } from './defined-proposal-pricing-option-avg-aggregate.input';
import { DefinedProposalPricingOptionSumAggregateInput } from './defined-proposal-pricing-option-sum-aggregate.input';
import { DefinedProposalPricingOptionMinAggregateInput } from './defined-proposal-pricing-option-min-aggregate.input';
import { DefinedProposalPricingOptionMaxAggregateInput } from './defined-proposal-pricing-option-max-aggregate.input';

@ArgsType()
export class DefinedProposalPricingOptionGroupByArgs {

    @Field(() => DefinedProposalPricingOptionWhereInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    where?: DefinedProposalPricingOptionWhereInput;

    @Field(() => [DefinedProposalPricingOptionOrderByWithAggregationInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionOrderByWithAggregationInput)
    orderBy?: Array<DefinedProposalPricingOptionOrderByWithAggregationInput>;

    @Field(() => [DefinedProposalPricingOptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedProposalPricingOptionScalarFieldEnum>;

    @Field(() => DefinedProposalPricingOptionScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionScalarWhereWithAggregatesInput)
    having?: DefinedProposalPricingOptionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedProposalPricingOptionCountAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionCountAggregateInput)
    _count?: DefinedProposalPricingOptionCountAggregateInput;

    @Field(() => DefinedProposalPricingOptionAvgAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionAvgAggregateInput)
    _avg?: DefinedProposalPricingOptionAvgAggregateInput;

    @Field(() => DefinedProposalPricingOptionSumAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionSumAggregateInput)
    _sum?: DefinedProposalPricingOptionSumAggregateInput;

    @Field(() => DefinedProposalPricingOptionMinAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionMinAggregateInput)
    _min?: DefinedProposalPricingOptionMinAggregateInput;

    @Field(() => DefinedProposalPricingOptionMaxAggregateInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionMaxAggregateInput)
    _max?: DefinedProposalPricingOptionMaxAggregateInput;
}
