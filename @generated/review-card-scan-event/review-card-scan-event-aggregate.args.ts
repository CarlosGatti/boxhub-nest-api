import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardScanEventWhereInput } from './review-card-scan-event-where.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventOrderByWithRelationInput } from './review-card-scan-event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardScanEventCountAggregateInput } from './review-card-scan-event-count-aggregate.input';
import { ReviewCardScanEventAvgAggregateInput } from './review-card-scan-event-avg-aggregate.input';
import { ReviewCardScanEventSumAggregateInput } from './review-card-scan-event-sum-aggregate.input';
import { ReviewCardScanEventMinAggregateInput } from './review-card-scan-event-min-aggregate.input';
import { ReviewCardScanEventMaxAggregateInput } from './review-card-scan-event-max-aggregate.input';

@ArgsType()
export class ReviewCardScanEventAggregateArgs {

    @Field(() => ReviewCardScanEventWhereInput, {nullable:true})
    @Type(() => ReviewCardScanEventWhereInput)
    where?: ReviewCardScanEventWhereInput;

    @Field(() => [ReviewCardScanEventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardScanEventOrderByWithRelationInput>;

    @Field(() => ReviewCardScanEventWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>;

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
