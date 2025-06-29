import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogType } from '../prisma/log-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ConstructionLogCountAggregate } from './construction-log-count-aggregate.output';
import { ConstructionLogAvgAggregate } from './construction-log-avg-aggregate.output';
import { ConstructionLogSumAggregate } from './construction-log-sum-aggregate.output';
import { ConstructionLogMinAggregate } from './construction-log-min-aggregate.output';
import { ConstructionLogMaxAggregate } from './construction-log-max-aggregate.output';

@ObjectType()
export class ConstructionLogGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => LogType, {nullable:false})
    type!: keyof typeof LogType;

    @Field(() => GraphQLJSON, {nullable:true})
    images?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ConstructionLogCountAggregate, {nullable:true})
    _count?: ConstructionLogCountAggregate;

    @Field(() => ConstructionLogAvgAggregate, {nullable:true})
    _avg?: ConstructionLogAvgAggregate;

    @Field(() => ConstructionLogSumAggregate, {nullable:true})
    _sum?: ConstructionLogSumAggregate;

    @Field(() => ConstructionLogMinAggregate, {nullable:true})
    _min?: ConstructionLogMinAggregate;

    @Field(() => ConstructionLogMaxAggregate, {nullable:true})
    _max?: ConstructionLogMaxAggregate;
}
