import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PortfolioCountAggregate } from './portfolio-count-aggregate.output';
import { PortfolioAvgAggregate } from './portfolio-avg-aggregate.output';
import { PortfolioSumAggregate } from './portfolio-sum-aggregate.output';
import { PortfolioMinAggregate } from './portfolio-min-aggregate.output';
import { PortfolioMaxAggregate } from './portfolio-max-aggregate.output';

@ObjectType()
export class PortfolioGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    baseCurrency!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PortfolioCountAggregate, {nullable:true})
    _count?: PortfolioCountAggregate;

    @Field(() => PortfolioAvgAggregate, {nullable:true})
    _avg?: PortfolioAvgAggregate;

    @Field(() => PortfolioSumAggregate, {nullable:true})
    _sum?: PortfolioSumAggregate;

    @Field(() => PortfolioMinAggregate, {nullable:true})
    _min?: PortfolioMinAggregate;

    @Field(() => PortfolioMaxAggregate, {nullable:true})
    _max?: PortfolioMaxAggregate;
}
