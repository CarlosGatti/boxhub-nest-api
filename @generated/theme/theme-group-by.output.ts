import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ThemeCountAggregate } from './theme-count-aggregate.output';
import { ThemeAvgAggregate } from './theme-avg-aggregate.output';
import { ThemeSumAggregate } from './theme-sum-aggregate.output';
import { ThemeMinAggregate } from './theme-min-aggregate.output';
import { ThemeMaxAggregate } from './theme-max-aggregate.output';

@ObjectType()
export class ThemeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    processId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
