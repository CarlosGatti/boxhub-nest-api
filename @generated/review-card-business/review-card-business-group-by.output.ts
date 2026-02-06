import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardBusinessCountAggregate } from './review-card-business-count-aggregate.output';
import { ReviewCardBusinessAvgAggregate } from './review-card-business-avg-aggregate.output';
import { ReviewCardBusinessSumAggregate } from './review-card-business-sum-aggregate.output';
import { ReviewCardBusinessMinAggregate } from './review-card-business-min-aggregate.output';
import { ReviewCardBusinessMaxAggregate } from './review-card-business-max-aggregate.output';

@ObjectType()
export class ReviewCardBusinessGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    placeId?: string;

    @Field(() => String, {nullable:true})
    googleReviewUrl?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReviewCardBusinessCountAggregate, {nullable:true})
    _count?: ReviewCardBusinessCountAggregate;

    @Field(() => ReviewCardBusinessAvgAggregate, {nullable:true})
    _avg?: ReviewCardBusinessAvgAggregate;

    @Field(() => ReviewCardBusinessSumAggregate, {nullable:true})
    _sum?: ReviewCardBusinessSumAggregate;

    @Field(() => ReviewCardBusinessMinAggregate, {nullable:true})
    _min?: ReviewCardBusinessMinAggregate;

    @Field(() => ReviewCardBusinessMaxAggregate, {nullable:true})
    _max?: ReviewCardBusinessMaxAggregate;
}
