import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BucketShareCountAggregate } from './bucket-share-count-aggregate.output';
import { BucketShareAvgAggregate } from './bucket-share-avg-aggregate.output';
import { BucketShareSumAggregate } from './bucket-share-sum-aggregate.output';
import { BucketShareMinAggregate } from './bucket-share-min-aggregate.output';
import { BucketShareMaxAggregate } from './bucket-share-max-aggregate.output';

@ObjectType()
export class AggregateBucketShare {

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
