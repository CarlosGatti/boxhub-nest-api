import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalOrderByWithAggregationInput } from './defined-proposal-order-by-with-aggregation.input';
import { DefinedProposalScalarFieldEnum } from './defined-proposal-scalar-field.enum';
import { DefinedProposalScalarWhereWithAggregatesInput } from './defined-proposal-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedProposalCountAggregateInput } from './defined-proposal-count-aggregate.input';
import { DefinedProposalAvgAggregateInput } from './defined-proposal-avg-aggregate.input';
import { DefinedProposalSumAggregateInput } from './defined-proposal-sum-aggregate.input';
import { DefinedProposalMinAggregateInput } from './defined-proposal-min-aggregate.input';
import { DefinedProposalMaxAggregateInput } from './defined-proposal-max-aggregate.input';

@ArgsType()
export class DefinedProposalGroupByArgs {

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;

    @Field(() => [DefinedProposalOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedProposalOrderByWithAggregationInput>;

    @Field(() => [DefinedProposalScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedProposalScalarFieldEnum>;

    @Field(() => DefinedProposalScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedProposalScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedProposalCountAggregateInput, {nullable:true})
    _count?: DefinedProposalCountAggregateInput;

    @Field(() => DefinedProposalAvgAggregateInput, {nullable:true})
    _avg?: DefinedProposalAvgAggregateInput;

    @Field(() => DefinedProposalSumAggregateInput, {nullable:true})
    _sum?: DefinedProposalSumAggregateInput;

    @Field(() => DefinedProposalMinAggregateInput, {nullable:true})
    _min?: DefinedProposalMinAggregateInput;

    @Field(() => DefinedProposalMaxAggregateInput, {nullable:true})
    _max?: DefinedProposalMaxAggregateInput;
}
