import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReviewCardBusinessCountAggregate } from './review-card-business-count-aggregate.output';
import { ReviewCardBusinessAvgAggregate } from './review-card-business-avg-aggregate.output';
import { ReviewCardBusinessSumAggregate } from './review-card-business-sum-aggregate.output';
import { ReviewCardBusinessMinAggregate } from './review-card-business-min-aggregate.output';
import { ReviewCardBusinessMaxAggregate } from './review-card-business-max-aggregate.output';

@ObjectType()
export class AggregateReviewCardBusiness {

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
