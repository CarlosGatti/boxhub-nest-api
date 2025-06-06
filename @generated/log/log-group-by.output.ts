import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogAction } from '../prisma/log-action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { LogCountAggregate } from './log-count-aggregate.output';
import { LogAvgAggregate } from './log-avg-aggregate.output';
import { LogSumAggregate } from './log-sum-aggregate.output';
import { LogMinAggregate } from './log-min-aggregate.output';
import { LogMaxAggregate } from './log-max-aggregate.output';

@ObjectType()
export class LogGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => LogAction, {nullable:false})
    action!: keyof typeof LogAction;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => String, {nullable:true})
    route?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => String, {nullable:true})
    ipAddress?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => LogCountAggregate, {nullable:true})
    _count?: LogCountAggregate;

    @Field(() => LogAvgAggregate, {nullable:true})
    _avg?: LogAvgAggregate;

    @Field(() => LogSumAggregate, {nullable:true})
    _sum?: LogSumAggregate;

    @Field(() => LogMinAggregate, {nullable:true})
    _min?: LogMinAggregate;

    @Field(() => LogMaxAggregate, {nullable:true})
    _max?: LogMaxAggregate;
}
