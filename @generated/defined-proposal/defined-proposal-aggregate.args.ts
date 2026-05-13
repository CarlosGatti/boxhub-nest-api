import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalOrderByWithRelationInput } from './defined-proposal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedProposalCountAggregateInput } from './defined-proposal-count-aggregate.input';
import { DefinedProposalAvgAggregateInput } from './defined-proposal-avg-aggregate.input';
import { DefinedProposalSumAggregateInput } from './defined-proposal-sum-aggregate.input';
import { DefinedProposalMinAggregateInput } from './defined-proposal-min-aggregate.input';
import { DefinedProposalMaxAggregateInput } from './defined-proposal-max-aggregate.input';

@ArgsType()
export class DefinedProposalAggregateArgs {

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;

    @Field(() => [DefinedProposalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedProposalOrderByWithRelationInput>;

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

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
