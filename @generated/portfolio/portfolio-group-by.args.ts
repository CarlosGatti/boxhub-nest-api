import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PortfolioWhereInput } from './portfolio-where.input';
import { Type } from 'class-transformer';
import { PortfolioOrderByWithAggregationInput } from './portfolio-order-by-with-aggregation.input';
import { PortfolioScalarFieldEnum } from './portfolio-scalar-field.enum';
import { PortfolioScalarWhereWithAggregatesInput } from './portfolio-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PortfolioCountAggregateInput } from './portfolio-count-aggregate.input';
import { PortfolioAvgAggregateInput } from './portfolio-avg-aggregate.input';
import { PortfolioSumAggregateInput } from './portfolio-sum-aggregate.input';
import { PortfolioMinAggregateInput } from './portfolio-min-aggregate.input';
import { PortfolioMaxAggregateInput } from './portfolio-max-aggregate.input';

@ArgsType()
export class PortfolioGroupByArgs {

    @Field(() => PortfolioWhereInput, {nullable:true})
    @Type(() => PortfolioWhereInput)
    where?: PortfolioWhereInput;

    @Field(() => [PortfolioOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PortfolioOrderByWithAggregationInput>;

    @Field(() => [PortfolioScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PortfolioScalarFieldEnum>;

    @Field(() => PortfolioScalarWhereWithAggregatesInput, {nullable:true})
    having?: PortfolioScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PortfolioCountAggregateInput, {nullable:true})
    _count?: PortfolioCountAggregateInput;

    @Field(() => PortfolioAvgAggregateInput, {nullable:true})
    _avg?: PortfolioAvgAggregateInput;

    @Field(() => PortfolioSumAggregateInput, {nullable:true})
    _sum?: PortfolioSumAggregateInput;

    @Field(() => PortfolioMinAggregateInput, {nullable:true})
    _min?: PortfolioMinAggregateInput;

    @Field(() => PortfolioMaxAggregateInput, {nullable:true})
    _max?: PortfolioMaxAggregateInput;
}
