import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedLeadWhereInput } from './defined-lead-where.input';
import { Type } from 'class-transformer';
import { DefinedLeadOrderByWithRelationInput } from './defined-lead-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedLeadWhereUniqueInput } from './defined-lead-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedLeadCountAggregateInput } from './defined-lead-count-aggregate.input';
import { DefinedLeadAvgAggregateInput } from './defined-lead-avg-aggregate.input';
import { DefinedLeadSumAggregateInput } from './defined-lead-sum-aggregate.input';
import { DefinedLeadMinAggregateInput } from './defined-lead-min-aggregate.input';
import { DefinedLeadMaxAggregateInput } from './defined-lead-max-aggregate.input';

@ArgsType()
export class DefinedLeadAggregateArgs {

    @Field(() => DefinedLeadWhereInput, {nullable:true})
    @Type(() => DefinedLeadWhereInput)
    where?: DefinedLeadWhereInput;

    @Field(() => [DefinedLeadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedLeadOrderByWithRelationInput>;

    @Field(() => DefinedLeadWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedLeadWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedLeadCountAggregateInput, {nullable:true})
    _count?: DefinedLeadCountAggregateInput;

    @Field(() => DefinedLeadAvgAggregateInput, {nullable:true})
    _avg?: DefinedLeadAvgAggregateInput;

    @Field(() => DefinedLeadSumAggregateInput, {nullable:true})
    _sum?: DefinedLeadSumAggregateInput;

    @Field(() => DefinedLeadMinAggregateInput, {nullable:true})
    _min?: DefinedLeadMinAggregateInput;

    @Field(() => DefinedLeadMaxAggregateInput, {nullable:true})
    _max?: DefinedLeadMaxAggregateInput;
}
