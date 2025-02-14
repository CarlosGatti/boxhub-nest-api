import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PillarWhereInput } from './pillar-where.input';
import { Type } from 'class-transformer';
import { PillarOrderByWithAggregationInput } from './pillar-order-by-with-aggregation.input';
import { PillarScalarFieldEnum } from './pillar-scalar-field.enum';
import { PillarScalarWhereWithAggregatesInput } from './pillar-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PillarCountAggregateInput } from './pillar-count-aggregate.input';
import { PillarAvgAggregateInput } from './pillar-avg-aggregate.input';
import { PillarSumAggregateInput } from './pillar-sum-aggregate.input';
import { PillarMinAggregateInput } from './pillar-min-aggregate.input';
import { PillarMaxAggregateInput } from './pillar-max-aggregate.input';

@ArgsType()
export class PillarGroupByArgs {

    @Field(() => PillarWhereInput, {nullable:true})
    @Type(() => PillarWhereInput)
    where?: PillarWhereInput;

    @Field(() => [PillarOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PillarOrderByWithAggregationInput>;

    @Field(() => [PillarScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PillarScalarFieldEnum>;

    @Field(() => PillarScalarWhereWithAggregatesInput, {nullable:true})
    having?: PillarScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PillarCountAggregateInput, {nullable:true})
    _count?: PillarCountAggregateInput;

    @Field(() => PillarAvgAggregateInput, {nullable:true})
    _avg?: PillarAvgAggregateInput;

    @Field(() => PillarSumAggregateInput, {nullable:true})
    _sum?: PillarSumAggregateInput;

    @Field(() => PillarMinAggregateInput, {nullable:true})
    _min?: PillarMinAggregateInput;

    @Field(() => PillarMaxAggregateInput, {nullable:true})
    _max?: PillarMaxAggregateInput;
}
