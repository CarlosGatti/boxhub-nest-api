import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryOrderByWithRelationInput } from './feed-item-summary-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedItemSummaryWhereUniqueInput } from './feed-item-summary-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedItemSummaryCountAggregateInput } from './feed-item-summary-count-aggregate.input';
import { FeedItemSummaryAvgAggregateInput } from './feed-item-summary-avg-aggregate.input';
import { FeedItemSummarySumAggregateInput } from './feed-item-summary-sum-aggregate.input';
import { FeedItemSummaryMinAggregateInput } from './feed-item-summary-min-aggregate.input';
import { FeedItemSummaryMaxAggregateInput } from './feed-item-summary-max-aggregate.input';

@ArgsType()
export class FeedItemSummaryAggregateArgs {

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereInput)
    where?: FeedItemSummaryWhereInput;

    @Field(() => [FeedItemSummaryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedItemSummaryOrderByWithRelationInput>;

    @Field(() => FeedItemSummaryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedItemSummaryWhereUniqueInput, 'id' | 'itemId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedItemSummaryCountAggregateInput, {nullable:true})
    _count?: FeedItemSummaryCountAggregateInput;

    @Field(() => FeedItemSummaryAvgAggregateInput, {nullable:true})
    _avg?: FeedItemSummaryAvgAggregateInput;

    @Field(() => FeedItemSummarySumAggregateInput, {nullable:true})
    _sum?: FeedItemSummarySumAggregateInput;

    @Field(() => FeedItemSummaryMinAggregateInput, {nullable:true})
    _min?: FeedItemSummaryMinAggregateInput;

    @Field(() => FeedItemSummaryMaxAggregateInput, {nullable:true})
    _max?: FeedItemSummaryMaxAggregateInput;
}
