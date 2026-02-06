import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReviewCardExportCountAggregate } from './review-card-export-count-aggregate.output';
import { ReviewCardExportAvgAggregate } from './review-card-export-avg-aggregate.output';
import { ReviewCardExportSumAggregate } from './review-card-export-sum-aggregate.output';
import { ReviewCardExportMinAggregate } from './review-card-export-min-aggregate.output';
import { ReviewCardExportMaxAggregate } from './review-card-export-max-aggregate.output';

@ObjectType()
export class AggregateReviewCardExport {

    @Field(() => ReviewCardExportCountAggregate, {nullable:true})
    _count?: ReviewCardExportCountAggregate;

    @Field(() => ReviewCardExportAvgAggregate, {nullable:true})
    _avg?: ReviewCardExportAvgAggregate;

    @Field(() => ReviewCardExportSumAggregate, {nullable:true})
    _sum?: ReviewCardExportSumAggregate;

    @Field(() => ReviewCardExportMinAggregate, {nullable:true})
    _min?: ReviewCardExportMinAggregate;

    @Field(() => ReviewCardExportMaxAggregate, {nullable:true})
    _max?: ReviewCardExportMaxAggregate;
}
