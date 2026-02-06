import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from '../prisma/review-card-premium-request-status.enum';
import { ReviewCardPremiumRequestCountAggregate } from './review-card-premium-request-count-aggregate.output';
import { ReviewCardPremiumRequestAvgAggregate } from './review-card-premium-request-avg-aggregate.output';
import { ReviewCardPremiumRequestSumAggregate } from './review-card-premium-request-sum-aggregate.output';
import { ReviewCardPremiumRequestMinAggregate } from './review-card-premium-request-min-aggregate.output';
import { ReviewCardPremiumRequestMaxAggregate } from './review-card-premium-request-max-aggregate.output';

@ObjectType()
export class ReviewCardPremiumRequestGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:false})
    notes!: string;

    @Field(() => ReviewCardPremiumRequestStatus, {nullable:false})
    status!: keyof typeof ReviewCardPremiumRequestStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReviewCardPremiumRequestCountAggregate, {nullable:true})
    _count?: ReviewCardPremiumRequestCountAggregate;

    @Field(() => ReviewCardPremiumRequestAvgAggregate, {nullable:true})
    _avg?: ReviewCardPremiumRequestAvgAggregate;

    @Field(() => ReviewCardPremiumRequestSumAggregate, {nullable:true})
    _sum?: ReviewCardPremiumRequestSumAggregate;

    @Field(() => ReviewCardPremiumRequestMinAggregate, {nullable:true})
    _min?: ReviewCardPremiumRequestMinAggregate;

    @Field(() => ReviewCardPremiumRequestMaxAggregate, {nullable:true})
    _max?: ReviewCardPremiumRequestMaxAggregate;
}
