import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BucketVisionSectionCountAggregate } from './bucket-vision-section-count-aggregate.output';
import { BucketVisionSectionAvgAggregate } from './bucket-vision-section-avg-aggregate.output';
import { BucketVisionSectionSumAggregate } from './bucket-vision-section-sum-aggregate.output';
import { BucketVisionSectionMinAggregate } from './bucket-vision-section-min-aggregate.output';
import { BucketVisionSectionMaxAggregate } from './bucket-vision-section-max-aggregate.output';

@ObjectType()
export class AggregateBucketVisionSection {

    @Field(() => BucketVisionSectionCountAggregate, {nullable:true})
    _count?: BucketVisionSectionCountAggregate;

    @Field(() => BucketVisionSectionAvgAggregate, {nullable:true})
    _avg?: BucketVisionSectionAvgAggregate;

    @Field(() => BucketVisionSectionSumAggregate, {nullable:true})
    _sum?: BucketVisionSectionSumAggregate;

    @Field(() => BucketVisionSectionMinAggregate, {nullable:true})
    _min?: BucketVisionSectionMinAggregate;

    @Field(() => BucketVisionSectionMaxAggregate, {nullable:true})
    _max?: BucketVisionSectionMaxAggregate;
}
