import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppCountAggregate } from './app-count-aggregate.output';
import { AppAvgAggregate } from './app-avg-aggregate.output';
import { AppSumAggregate } from './app-sum-aggregate.output';
import { AppMinAggregate } from './app-min-aggregate.output';
import { AppMaxAggregate } from './app-max-aggregate.output';

@ObjectType()
export class AppGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AppCountAggregate, {nullable:true})
    _count?: AppCountAggregate;

    @Field(() => AppAvgAggregate, {nullable:true})
    _avg?: AppAvgAggregate;

    @Field(() => AppSumAggregate, {nullable:true})
    _sum?: AppSumAggregate;

    @Field(() => AppMinAggregate, {nullable:true})
    _min?: AppMinAggregate;

    @Field(() => AppMaxAggregate, {nullable:true})
    _max?: AppMaxAggregate;
}
