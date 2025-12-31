import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowEntryWhereInput } from './cashflow-entry-where.input';
import { Type } from 'class-transformer';
import { CashflowEntryOrderByWithRelationInput } from './cashflow-entry-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CashflowEntryCountAggregateInput } from './cashflow-entry-count-aggregate.input';
import { CashflowEntryAvgAggregateInput } from './cashflow-entry-avg-aggregate.input';
import { CashflowEntrySumAggregateInput } from './cashflow-entry-sum-aggregate.input';
import { CashflowEntryMinAggregateInput } from './cashflow-entry-min-aggregate.input';
import { CashflowEntryMaxAggregateInput } from './cashflow-entry-max-aggregate.input';

@ArgsType()
export class CashflowEntryAggregateArgs {

    @Field(() => CashflowEntryWhereInput, {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    where?: CashflowEntryWhereInput;

    @Field(() => [CashflowEntryOrderByWithRelationInput], {nullable:true})
    @Type(() => CashflowEntryOrderByWithRelationInput)
    orderBy?: Array<CashflowEntryOrderByWithRelationInput>;

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:true})
    @Type(() => CashflowEntryWhereUniqueInput)
    cursor?: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CashflowEntryCountAggregateInput, {nullable:true})
    @Type(() => CashflowEntryCountAggregateInput)
    _count?: CashflowEntryCountAggregateInput;

    @Field(() => CashflowEntryAvgAggregateInput, {nullable:true})
    @Type(() => CashflowEntryAvgAggregateInput)
    _avg?: CashflowEntryAvgAggregateInput;

    @Field(() => CashflowEntrySumAggregateInput, {nullable:true})
    @Type(() => CashflowEntrySumAggregateInput)
    _sum?: CashflowEntrySumAggregateInput;

    @Field(() => CashflowEntryMinAggregateInput, {nullable:true})
    @Type(() => CashflowEntryMinAggregateInput)
    _min?: CashflowEntryMinAggregateInput;

    @Field(() => CashflowEntryMaxAggregateInput, {nullable:true})
    @Type(() => CashflowEntryMaxAggregateInput)
    _max?: CashflowEntryMaxAggregateInput;
}
