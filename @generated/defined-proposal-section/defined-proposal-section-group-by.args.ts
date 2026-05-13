import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalSectionWhereInput } from './defined-proposal-section-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionOrderByWithAggregationInput } from './defined-proposal-section-order-by-with-aggregation.input';
import { DefinedProposalSectionScalarFieldEnum } from './defined-proposal-section-scalar-field.enum';
import { DefinedProposalSectionScalarWhereWithAggregatesInput } from './defined-proposal-section-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedProposalSectionCountAggregateInput } from './defined-proposal-section-count-aggregate.input';
import { DefinedProposalSectionAvgAggregateInput } from './defined-proposal-section-avg-aggregate.input';
import { DefinedProposalSectionSumAggregateInput } from './defined-proposal-section-sum-aggregate.input';
import { DefinedProposalSectionMinAggregateInput } from './defined-proposal-section-min-aggregate.input';
import { DefinedProposalSectionMaxAggregateInput } from './defined-proposal-section-max-aggregate.input';

@ArgsType()
export class DefinedProposalSectionGroupByArgs {

    @Field(() => DefinedProposalSectionWhereInput, {nullable:true})
    @Type(() => DefinedProposalSectionWhereInput)
    where?: DefinedProposalSectionWhereInput;

    @Field(() => [DefinedProposalSectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedProposalSectionOrderByWithAggregationInput>;

    @Field(() => [DefinedProposalSectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedProposalSectionScalarFieldEnum>;

    @Field(() => DefinedProposalSectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedProposalSectionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedProposalSectionCountAggregateInput, {nullable:true})
    _count?: DefinedProposalSectionCountAggregateInput;

    @Field(() => DefinedProposalSectionAvgAggregateInput, {nullable:true})
    _avg?: DefinedProposalSectionAvgAggregateInput;

    @Field(() => DefinedProposalSectionSumAggregateInput, {nullable:true})
    _sum?: DefinedProposalSectionSumAggregateInput;

    @Field(() => DefinedProposalSectionMinAggregateInput, {nullable:true})
    _min?: DefinedProposalSectionMinAggregateInput;

    @Field(() => DefinedProposalSectionMaxAggregateInput, {nullable:true})
    _max?: DefinedProposalSectionMaxAggregateInput;
}
