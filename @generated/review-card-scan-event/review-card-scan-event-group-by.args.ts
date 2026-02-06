import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardScanEventWhereInput } from './review-card-scan-event-where.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventOrderByWithAggregationInput } from './review-card-scan-event-order-by-with-aggregation.input';
import { ReviewCardScanEventScalarFieldEnum } from './review-card-scan-event-scalar-field.enum';
import { ReviewCardScanEventScalarWhereWithAggregatesInput } from './review-card-scan-event-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardScanEventCountAggregateInput } from './review-card-scan-event-count-aggregate.input';
import { ReviewCardScanEventAvgAggregateInput } from './review-card-scan-event-avg-aggregate.input';
import { ReviewCardScanEventSumAggregateInput } from './review-card-scan-event-sum-aggregate.input';
import { ReviewCardScanEventMinAggregateInput } from './review-card-scan-event-min-aggregate.input';
import { ReviewCardScanEventMaxAggregateInput } from './review-card-scan-event-max-aggregate.input';

@ArgsType()
export class ReviewCardScanEventGroupByArgs {

    @Field(() => ReviewCardScanEventWhereInput, {nullable:true})
    @Type(() => ReviewCardScanEventWhereInput)
    where?: ReviewCardScanEventWhereInput;

    @Field(() => [ReviewCardScanEventOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewCardScanEventOrderByWithAggregationInput>;

    @Field(() => [ReviewCardScanEventScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewCardScanEventScalarFieldEnum>;

    @Field(() => ReviewCardScanEventScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewCardScanEventScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardScanEventCountAggregateInput, {nullable:true})
    _count?: ReviewCardScanEventCountAggregateInput;

    @Field(() => ReviewCardScanEventAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardScanEventAvgAggregateInput;

    @Field(() => ReviewCardScanEventSumAggregateInput, {nullable:true})
    _sum?: ReviewCardScanEventSumAggregateInput;

    @Field(() => ReviewCardScanEventMinAggregateInput, {nullable:true})
    _min?: ReviewCardScanEventMinAggregateInput;

    @Field(() => ReviewCardScanEventMaxAggregateInput, {nullable:true})
    _max?: ReviewCardScanEventMaxAggregateInput;
}
