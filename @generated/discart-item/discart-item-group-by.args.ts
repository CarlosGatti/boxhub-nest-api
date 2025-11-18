import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscartItemWhereInput } from './discart-item-where.input';
import { Type } from 'class-transformer';
import { DiscartItemOrderByWithAggregationInput } from './discart-item-order-by-with-aggregation.input';
import { DiscartItemScalarFieldEnum } from './discart-item-scalar-field.enum';
import { DiscartItemScalarWhereWithAggregatesInput } from './discart-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DiscartItemCountAggregateInput } from './discart-item-count-aggregate.input';
import { DiscartItemAvgAggregateInput } from './discart-item-avg-aggregate.input';
import { DiscartItemSumAggregateInput } from './discart-item-sum-aggregate.input';
import { DiscartItemMinAggregateInput } from './discart-item-min-aggregate.input';
import { DiscartItemMaxAggregateInput } from './discart-item-max-aggregate.input';

@ArgsType()
export class DiscartItemGroupByArgs {

    @Field(() => DiscartItemWhereInput, {nullable:true})
    @Type(() => DiscartItemWhereInput)
    where?: DiscartItemWhereInput;

    @Field(() => [DiscartItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DiscartItemOrderByWithAggregationInput>;

    @Field(() => [DiscartItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DiscartItemScalarFieldEnum>;

    @Field(() => DiscartItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: DiscartItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DiscartItemCountAggregateInput, {nullable:true})
    _count?: DiscartItemCountAggregateInput;

    @Field(() => DiscartItemAvgAggregateInput, {nullable:true})
    _avg?: DiscartItemAvgAggregateInput;

    @Field(() => DiscartItemSumAggregateInput, {nullable:true})
    _sum?: DiscartItemSumAggregateInput;

    @Field(() => DiscartItemMinAggregateInput, {nullable:true})
    _min?: DiscartItemMinAggregateInput;

    @Field(() => DiscartItemMaxAggregateInput, {nullable:true})
    _max?: DiscartItemMaxAggregateInput;
}
