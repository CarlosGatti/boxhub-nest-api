import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RatingCountAggregate } from './rating-count-aggregate.output';
import { RatingAvgAggregate } from './rating-avg-aggregate.output';
import { RatingSumAggregate } from './rating-sum-aggregate.output';
import { RatingMinAggregate } from './rating-min-aggregate.output';
import { RatingMaxAggregate } from './rating-max-aggregate.output';

@ObjectType()
export class RatingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    sellerId!: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;

    @Field(() => Int, {nullable:false})
    stars!: number;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => RatingCountAggregate, {nullable:true})
    _count?: RatingCountAggregate;

    @Field(() => RatingAvgAggregate, {nullable:true})
    _avg?: RatingAvgAggregate;

    @Field(() => RatingSumAggregate, {nullable:true})
    _sum?: RatingSumAggregate;

    @Field(() => RatingMinAggregate, {nullable:true})
    _min?: RatingMinAggregate;

    @Field(() => RatingMaxAggregate, {nullable:true})
    _max?: RatingMaxAggregate;
}
