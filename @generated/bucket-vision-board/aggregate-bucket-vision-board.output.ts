import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BucketVisionBoardCountAggregate } from './bucket-vision-board-count-aggregate.output';
import { BucketVisionBoardAvgAggregate } from './bucket-vision-board-avg-aggregate.output';
import { BucketVisionBoardSumAggregate } from './bucket-vision-board-sum-aggregate.output';
import { BucketVisionBoardMinAggregate } from './bucket-vision-board-min-aggregate.output';
import { BucketVisionBoardMaxAggregate } from './bucket-vision-board-max-aggregate.output';

@ObjectType()
export class AggregateBucketVisionBoard {

    @Field(() => BucketVisionBoardCountAggregate, {nullable:true})
    _count?: BucketVisionBoardCountAggregate;

    @Field(() => BucketVisionBoardAvgAggregate, {nullable:true})
    _avg?: BucketVisionBoardAvgAggregate;

    @Field(() => BucketVisionBoardSumAggregate, {nullable:true})
    _sum?: BucketVisionBoardSumAggregate;

    @Field(() => BucketVisionBoardMinAggregate, {nullable:true})
    _min?: BucketVisionBoardMinAggregate;

    @Field(() => BucketVisionBoardMaxAggregate, {nullable:true})
    _max?: BucketVisionBoardMaxAggregate;
}
