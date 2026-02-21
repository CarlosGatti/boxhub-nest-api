import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketShareType } from '../prisma/bucket-share-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketShareCountAggregate } from './bucket-share-count-aggregate.output';
import { BucketShareAvgAggregate } from './bucket-share-avg-aggregate.output';
import { BucketShareSumAggregate } from './bucket-share-sum-aggregate.output';
import { BucketShareMinAggregate } from './bucket-share-min-aggregate.output';
import { BucketShareMaxAggregate } from './bucket-share-max-aggregate.output';

@ObjectType()
export class BucketShareGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => BucketShareType, {nullable:false})
    type!: keyof typeof BucketShareType;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => BucketShareCountAggregate, {nullable:true})
    _count?: BucketShareCountAggregate;

    @Field(() => BucketShareAvgAggregate, {nullable:true})
    _avg?: BucketShareAvgAggregate;

    @Field(() => BucketShareSumAggregate, {nullable:true})
    _sum?: BucketShareSumAggregate;

    @Field(() => BucketShareMinAggregate, {nullable:true})
    _min?: BucketShareMinAggregate;

    @Field(() => BucketShareMaxAggregate, {nullable:true})
    _max?: BucketShareMaxAggregate;
}
