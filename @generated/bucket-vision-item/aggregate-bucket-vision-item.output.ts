import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BucketVisionItemCountAggregate } from './bucket-vision-item-count-aggregate.output';
import { BucketVisionItemAvgAggregate } from './bucket-vision-item-avg-aggregate.output';
import { BucketVisionItemSumAggregate } from './bucket-vision-item-sum-aggregate.output';
import { BucketVisionItemMinAggregate } from './bucket-vision-item-min-aggregate.output';
import { BucketVisionItemMaxAggregate } from './bucket-vision-item-max-aggregate.output';

@ObjectType()
export class AggregateBucketVisionItem {

    @Field(() => BucketVisionItemCountAggregate, {nullable:true})
    _count?: BucketVisionItemCountAggregate;

    @Field(() => BucketVisionItemAvgAggregate, {nullable:true})
    _avg?: BucketVisionItemAvgAggregate;

    @Field(() => BucketVisionItemSumAggregate, {nullable:true})
    _sum?: BucketVisionItemSumAggregate;

    @Field(() => BucketVisionItemMinAggregate, {nullable:true})
    _min?: BucketVisionItemMinAggregate;

    @Field(() => BucketVisionItemMaxAggregate, {nullable:true})
    _max?: BucketVisionItemMaxAggregate;
}
