import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ThemeCountAggregate } from './theme-count-aggregate.output';
import { ThemeAvgAggregate } from './theme-avg-aggregate.output';
import { ThemeSumAggregate } from './theme-sum-aggregate.output';
import { ThemeMinAggregate } from './theme-min-aggregate.output';
import { ThemeMaxAggregate } from './theme-max-aggregate.output';

@ObjectType()
export class AggregateTheme {

    @Field(() => ThemeCountAggregate, {nullable:true})
    _count?: ThemeCountAggregate;

    @Field(() => ThemeAvgAggregate, {nullable:true})
    _avg?: ThemeAvgAggregate;

    @Field(() => ThemeSumAggregate, {nullable:true})
    _sum?: ThemeSumAggregate;

    @Field(() => ThemeMinAggregate, {nullable:true})
    _min?: ThemeMinAggregate;

    @Field(() => ThemeMaxAggregate, {nullable:true})
    _max?: ThemeMaxAggregate;
}
