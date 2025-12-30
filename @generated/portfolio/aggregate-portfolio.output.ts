import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PortfolioCountAggregate } from './portfolio-count-aggregate.output';
import { PortfolioAvgAggregate } from './portfolio-avg-aggregate.output';
import { PortfolioSumAggregate } from './portfolio-sum-aggregate.output';
import { PortfolioMinAggregate } from './portfolio-min-aggregate.output';
import { PortfolioMaxAggregate } from './portfolio-max-aggregate.output';

@ObjectType()
export class AggregatePortfolio {

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
