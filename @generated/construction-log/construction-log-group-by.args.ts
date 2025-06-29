import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConstructionLogWhereInput } from './construction-log-where.input';
import { Type } from 'class-transformer';
import { ConstructionLogOrderByWithAggregationInput } from './construction-log-order-by-with-aggregation.input';
import { ConstructionLogScalarFieldEnum } from './construction-log-scalar-field.enum';
import { ConstructionLogScalarWhereWithAggregatesInput } from './construction-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ConstructionLogCountAggregateInput } from './construction-log-count-aggregate.input';
import { ConstructionLogAvgAggregateInput } from './construction-log-avg-aggregate.input';
import { ConstructionLogSumAggregateInput } from './construction-log-sum-aggregate.input';
import { ConstructionLogMinAggregateInput } from './construction-log-min-aggregate.input';
import { ConstructionLogMaxAggregateInput } from './construction-log-max-aggregate.input';

@ArgsType()
export class ConstructionLogGroupByArgs {

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    @Type(() => ConstructionLogWhereInput)
    where?: ConstructionLogWhereInput;

    @Field(() => [ConstructionLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConstructionLogOrderByWithAggregationInput>;

    @Field(() => [ConstructionLogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConstructionLogScalarFieldEnum>;

    @Field(() => ConstructionLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: ConstructionLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConstructionLogCountAggregateInput, {nullable:true})
    _count?: ConstructionLogCountAggregateInput;

    @Field(() => ConstructionLogAvgAggregateInput, {nullable:true})
    _avg?: ConstructionLogAvgAggregateInput;

    @Field(() => ConstructionLogSumAggregateInput, {nullable:true})
    _sum?: ConstructionLogSumAggregateInput;

    @Field(() => ConstructionLogMinAggregateInput, {nullable:true})
    _min?: ConstructionLogMinAggregateInput;

    @Field(() => ConstructionLogMaxAggregateInput, {nullable:true})
    _max?: ConstructionLogMaxAggregateInput;
}
