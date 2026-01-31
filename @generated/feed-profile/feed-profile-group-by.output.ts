import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedProfileCountAggregate } from './feed-profile-count-aggregate.output';
import { FeedProfileAvgAggregate } from './feed-profile-avg-aggregate.output';
import { FeedProfileSumAggregate } from './feed-profile-sum-aggregate.output';
import { FeedProfileMinAggregate } from './feed-profile-min-aggregate.output';
import { FeedProfileMaxAggregate } from './feed-profile-max-aggregate.output';

@ObjectType()
export class FeedProfileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:true})
    timezone?: string;

    @Field(() => String, {nullable:true})
    language?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeedProfileCountAggregate, {nullable:true})
    _count?: FeedProfileCountAggregate;

    @Field(() => FeedProfileAvgAggregate, {nullable:true})
    _avg?: FeedProfileAvgAggregate;

    @Field(() => FeedProfileSumAggregate, {nullable:true})
    _sum?: FeedProfileSumAggregate;

    @Field(() => FeedProfileMinAggregate, {nullable:true})
    _min?: FeedProfileMinAggregate;

    @Field(() => FeedProfileMaxAggregate, {nullable:true})
    _max?: FeedProfileMaxAggregate;
}
