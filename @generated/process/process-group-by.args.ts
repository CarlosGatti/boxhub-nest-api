import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProcessWhereInput } from './process-where.input';
import { Type } from 'class-transformer';
import { ProcessOrderByWithAggregationInput } from './process-order-by-with-aggregation.input';
import { ProcessScalarFieldEnum } from './process-scalar-field.enum';
import { ProcessScalarWhereWithAggregatesInput } from './process-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProcessCountAggregateInput } from './process-count-aggregate.input';
import { ProcessAvgAggregateInput } from './process-avg-aggregate.input';
import { ProcessSumAggregateInput } from './process-sum-aggregate.input';
import { ProcessMinAggregateInput } from './process-min-aggregate.input';
import { ProcessMaxAggregateInput } from './process-max-aggregate.input';

@ArgsType()
export class ProcessGroupByArgs {

    @Field(() => ProcessWhereInput, {nullable:true})
    @Type(() => ProcessWhereInput)
    where?: ProcessWhereInput;

    @Field(() => [ProcessOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProcessOrderByWithAggregationInput>;

    @Field(() => [ProcessScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProcessScalarFieldEnum>;

    @Field(() => ProcessScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProcessScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProcessCountAggregateInput, {nullable:true})
    _count?: ProcessCountAggregateInput;

    @Field(() => ProcessAvgAggregateInput, {nullable:true})
    _avg?: ProcessAvgAggregateInput;

    @Field(() => ProcessSumAggregateInput, {nullable:true})
    _sum?: ProcessSumAggregateInput;

    @Field(() => ProcessMinAggregateInput, {nullable:true})
    _min?: ProcessMinAggregateInput;

    @Field(() => ProcessMaxAggregateInput, {nullable:true})
    _max?: ProcessMaxAggregateInput;
}
