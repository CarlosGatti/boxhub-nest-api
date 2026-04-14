import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedLeadWhereInput } from './defined-lead-where.input';
import { Type } from 'class-transformer';
import { DefinedLeadOrderByWithAggregationInput } from './defined-lead-order-by-with-aggregation.input';
import { DefinedLeadScalarFieldEnum } from './defined-lead-scalar-field.enum';
import { DefinedLeadScalarWhereWithAggregatesInput } from './defined-lead-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedLeadCountAggregateInput } from './defined-lead-count-aggregate.input';
import { DefinedLeadAvgAggregateInput } from './defined-lead-avg-aggregate.input';
import { DefinedLeadSumAggregateInput } from './defined-lead-sum-aggregate.input';
import { DefinedLeadMinAggregateInput } from './defined-lead-min-aggregate.input';
import { DefinedLeadMaxAggregateInput } from './defined-lead-max-aggregate.input';

@ArgsType()
export class DefinedLeadGroupByArgs {

    @Field(() => DefinedLeadWhereInput, {nullable:true})
    @Type(() => DefinedLeadWhereInput)
    where?: DefinedLeadWhereInput;

    @Field(() => [DefinedLeadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedLeadOrderByWithAggregationInput>;

    @Field(() => [DefinedLeadScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedLeadScalarFieldEnum>;

    @Field(() => DefinedLeadScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedLeadScalarWhereWithAggregatesInput;

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
