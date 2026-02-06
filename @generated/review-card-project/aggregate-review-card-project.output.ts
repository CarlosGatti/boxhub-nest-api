import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReviewCardProjectCountAggregate } from './review-card-project-count-aggregate.output';
import { ReviewCardProjectAvgAggregate } from './review-card-project-avg-aggregate.output';
import { ReviewCardProjectSumAggregate } from './review-card-project-sum-aggregate.output';
import { ReviewCardProjectMinAggregate } from './review-card-project-min-aggregate.output';
import { ReviewCardProjectMaxAggregate } from './review-card-project-max-aggregate.output';

@ObjectType()
export class AggregateReviewCardProject {

    @Field(() => ReviewCardProjectCountAggregate, {nullable:true})
    _count?: ReviewCardProjectCountAggregate;

    @Field(() => ReviewCardProjectAvgAggregate, {nullable:true})
    _avg?: ReviewCardProjectAvgAggregate;

    @Field(() => ReviewCardProjectSumAggregate, {nullable:true})
    _sum?: ReviewCardProjectSumAggregate;

    @Field(() => ReviewCardProjectMinAggregate, {nullable:true})
    _min?: ReviewCardProjectMinAggregate;

    @Field(() => ReviewCardProjectMaxAggregate, {nullable:true})
    _max?: ReviewCardProjectMaxAggregate;
}
