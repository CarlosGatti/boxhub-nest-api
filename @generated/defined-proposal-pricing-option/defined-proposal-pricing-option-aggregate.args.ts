import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionWhereInput } from './defined-proposal-pricing-option-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionOrderByWithRelationInput } from './defined-proposal-pricing-option-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedProposalPricingOptionCountAggregateInput } from './defined-proposal-pricing-option-count-aggregate.input';
import { DefinedProposalPricingOptionAvgAggregateInput } from './defined-proposal-pricing-option-avg-aggregate.input';
import { DefinedProposalPricingOptionSumAggregateInput } from './defined-proposal-pricing-option-sum-aggregate.input';
import { DefinedProposalPricingOptionMinAggregateInput } from './defined-proposal-pricing-option-min-aggregate.input';
import { DefinedProposalPricingOptionMaxAggregateInput } from './defined-proposal-pricing-option-max-aggregate.input';

@ArgsType()
export class DefinedProposalPricingOptionAggregateArgs {

    @Field(() => DefinedProposalPricingOptionWhereInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    where?: DefinedProposalPricingOptionWhereInput;

    @Field(() => [DefinedProposalPricingOptionOrderByWithRelationInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionOrderByWithRelationInput)
    orderBy?: Array<DefinedProposalPricingOptionOrderByWithRelationInput>;

    @Field(() => DefinedProposalPricingOptionWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    cursor?: Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>;

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
