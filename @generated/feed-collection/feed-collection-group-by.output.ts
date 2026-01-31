import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedCollectionCountAggregate } from './feed-collection-count-aggregate.output';
import { FeedCollectionAvgAggregate } from './feed-collection-avg-aggregate.output';
import { FeedCollectionSumAggregate } from './feed-collection-sum-aggregate.output';
import { FeedCollectionMinAggregate } from './feed-collection-min-aggregate.output';
import { FeedCollectionMaxAggregate } from './feed-collection-max-aggregate.output';

@ObjectType()
export class FeedCollectionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => [String], {nullable:true})
    keywords?: Array<string>;

    @Field(() => [String], {nullable:true})
    blocked?: Array<string>;

    @Field(() => [String], {nullable:true})
    preferredDomains?: Array<string>;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeedCollectionCountAggregate, {nullable:true})
    _count?: FeedCollectionCountAggregate;

    @Field(() => FeedCollectionAvgAggregate, {nullable:true})
    _avg?: FeedCollectionAvgAggregate;

    @Field(() => FeedCollectionSumAggregate, {nullable:true})
    _sum?: FeedCollectionSumAggregate;

    @Field(() => FeedCollectionMinAggregate, {nullable:true})
    _min?: FeedCollectionMinAggregate;

    @Field(() => FeedCollectionMaxAggregate, {nullable:true})
    _max?: FeedCollectionMaxAggregate;
}
