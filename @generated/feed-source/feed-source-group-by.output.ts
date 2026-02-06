import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourceType } from '../prisma/feed-source-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedSourceCountAggregate } from './feed-source-count-aggregate.output';
import { FeedSourceAvgAggregate } from './feed-source-avg-aggregate.output';
import { FeedSourceSumAggregate } from './feed-source-sum-aggregate.output';
import { FeedSourceMinAggregate } from './feed-source-min-aggregate.output';
import { FeedSourceMaxAggregate } from './feed-source-max-aggregate.output';

@ObjectType()
export class FeedSourceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    collectionId!: number;

    @Field(() => FeedSourceType, {nullable:false})
    type!: keyof typeof FeedSourceType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Boolean, {nullable:false})
    includeShorts!: boolean;

    @Field(() => Int, {nullable:true})
    fetchEveryMin?: number;

    @Field(() => Date, {nullable:true})
    lastFetchedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    failureCount!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeedSourceCountAggregate, {nullable:true})
    _count?: FeedSourceCountAggregate;

    @Field(() => FeedSourceAvgAggregate, {nullable:true})
    _avg?: FeedSourceAvgAggregate;

    @Field(() => FeedSourceSumAggregate, {nullable:true})
    _sum?: FeedSourceSumAggregate;

    @Field(() => FeedSourceMinAggregate, {nullable:true})
    _min?: FeedSourceMinAggregate;

    @Field(() => FeedSourceMaxAggregate, {nullable:true})
    _max?: FeedSourceMaxAggregate;
}
