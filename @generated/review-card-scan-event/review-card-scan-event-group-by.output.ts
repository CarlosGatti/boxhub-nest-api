import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardScanEventCountAggregate } from './review-card-scan-event-count-aggregate.output';
import { ReviewCardScanEventAvgAggregate } from './review-card-scan-event-avg-aggregate.output';
import { ReviewCardScanEventSumAggregate } from './review-card-scan-event-sum-aggregate.output';
import { ReviewCardScanEventMinAggregate } from './review-card-scan-event-min-aggregate.output';
import { ReviewCardScanEventMaxAggregate } from './review-card-scan-event-max-aggregate.output';

@ObjectType()
export class ReviewCardScanEventGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:true})
    ipHash?: string;

    @Field(() => String, {nullable:true})
    userAgent?: string;

    @Field(() => String, {nullable:true})
    referer?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ReviewCardScanEventCountAggregate, {nullable:true})
    _count?: ReviewCardScanEventCountAggregate;

    @Field(() => ReviewCardScanEventAvgAggregate, {nullable:true})
    _avg?: ReviewCardScanEventAvgAggregate;

    @Field(() => ReviewCardScanEventSumAggregate, {nullable:true})
    _sum?: ReviewCardScanEventSumAggregate;

    @Field(() => ReviewCardScanEventMinAggregate, {nullable:true})
    _min?: ReviewCardScanEventMinAggregate;

    @Field(() => ReviewCardScanEventMaxAggregate, {nullable:true})
    _max?: ReviewCardScanEventMaxAggregate;
}
