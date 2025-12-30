import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PricePointWhereInput } from './price-point-where.input';
import { Type } from 'class-transformer';
import { PricePointOrderByWithAggregationInput } from './price-point-order-by-with-aggregation.input';
import { PricePointScalarFieldEnum } from './price-point-scalar-field.enum';
import { PricePointScalarWhereWithAggregatesInput } from './price-point-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PricePointCountAggregateInput } from './price-point-count-aggregate.input';
import { PricePointAvgAggregateInput } from './price-point-avg-aggregate.input';
import { PricePointSumAggregateInput } from './price-point-sum-aggregate.input';
import { PricePointMinAggregateInput } from './price-point-min-aggregate.input';
import { PricePointMaxAggregateInput } from './price-point-max-aggregate.input';

@ArgsType()
export class PricePointGroupByArgs {

    @Field(() => PricePointWhereInput, {nullable:true})
    @Type(() => PricePointWhereInput)
    where?: PricePointWhereInput;

    @Field(() => [PricePointOrderByWithAggregationInput], {nullable:true})
    @Type(() => PricePointOrderByWithAggregationInput)
    orderBy?: Array<PricePointOrderByWithAggregationInput>;

    @Field(() => [PricePointScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PricePointScalarFieldEnum>;

    @Field(() => PricePointScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => PricePointScalarWhereWithAggregatesInput)
    having?: PricePointScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PricePointCountAggregateInput, {nullable:true})
    @Type(() => PricePointCountAggregateInput)
    _count?: PricePointCountAggregateInput;

    @Field(() => PricePointAvgAggregateInput, {nullable:true})
    @Type(() => PricePointAvgAggregateInput)
    _avg?: PricePointAvgAggregateInput;

    @Field(() => PricePointSumAggregateInput, {nullable:true})
    @Type(() => PricePointSumAggregateInput)
    _sum?: PricePointSumAggregateInput;

    @Field(() => PricePointMinAggregateInput, {nullable:true})
    @Type(() => PricePointMinAggregateInput)
    _min?: PricePointMinAggregateInput;

    @Field(() => PricePointMaxAggregateInput, {nullable:true})
    @Type(() => PricePointMaxAggregateInput)
    _max?: PricePointMaxAggregateInput;
}
