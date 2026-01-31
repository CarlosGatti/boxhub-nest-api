import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedbackStatus } from '../prisma/feedback-status.enum';
import { FeedbackCountAggregate } from './feedback-count-aggregate.output';
import { FeedbackAvgAggregate } from './feedback-avg-aggregate.output';
import { FeedbackSumAggregate } from './feedback-sum-aggregate.output';
import { FeedbackMinAggregate } from './feedback-min-aggregate.output';
import { FeedbackMaxAggregate } from './feedback-max-aggregate.output';

@ObjectType()
export class FeedbackGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    targetAppId!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    anonymousId?: string;

    @Field(() => String, {nullable:true})
    contactEmail?: string;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => String, {nullable:true})
    contextPath?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => FeedbackStatus, {nullable:false})
    status!: keyof typeof FeedbackStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeedbackCountAggregate, {nullable:true})
    _count?: FeedbackCountAggregate;

    @Field(() => FeedbackAvgAggregate, {nullable:true})
    _avg?: FeedbackAvgAggregate;

    @Field(() => FeedbackSumAggregate, {nullable:true})
    _sum?: FeedbackSumAggregate;

    @Field(() => FeedbackMinAggregate, {nullable:true})
    _min?: FeedbackMinAggregate;

    @Field(() => FeedbackMaxAggregate, {nullable:true})
    _max?: FeedbackMaxAggregate;
}
