import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReviewCardTemplateCountAggregate } from './review-card-template-count-aggregate.output';
import { ReviewCardTemplateAvgAggregate } from './review-card-template-avg-aggregate.output';
import { ReviewCardTemplateSumAggregate } from './review-card-template-sum-aggregate.output';
import { ReviewCardTemplateMinAggregate } from './review-card-template-min-aggregate.output';
import { ReviewCardTemplateMaxAggregate } from './review-card-template-max-aggregate.output';

@ObjectType()
export class AggregateReviewCardTemplate {

    @Field(() => ReviewCardTemplateCountAggregate, {nullable:true})
    _count?: ReviewCardTemplateCountAggregate;

    @Field(() => ReviewCardTemplateAvgAggregate, {nullable:true})
    _avg?: ReviewCardTemplateAvgAggregate;

    @Field(() => ReviewCardTemplateSumAggregate, {nullable:true})
    _sum?: ReviewCardTemplateSumAggregate;

    @Field(() => ReviewCardTemplateMinAggregate, {nullable:true})
    _min?: ReviewCardTemplateMinAggregate;

    @Field(() => ReviewCardTemplateMaxAggregate, {nullable:true})
    _max?: ReviewCardTemplateMaxAggregate;
}
