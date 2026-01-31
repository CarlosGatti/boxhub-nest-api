import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryOrderByWithAggregationInput } from './feed-item-summary-order-by-with-aggregation.input';
import { FeedItemSummaryScalarFieldEnum } from './feed-item-summary-scalar-field.enum';
import { FeedItemSummaryScalarWhereWithAggregatesInput } from './feed-item-summary-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedItemSummaryCountAggregateInput } from './feed-item-summary-count-aggregate.input';
import { FeedItemSummaryAvgAggregateInput } from './feed-item-summary-avg-aggregate.input';
import { FeedItemSummarySumAggregateInput } from './feed-item-summary-sum-aggregate.input';
import { FeedItemSummaryMinAggregateInput } from './feed-item-summary-min-aggregate.input';
import { FeedItemSummaryMaxAggregateInput } from './feed-item-summary-max-aggregate.input';

@ArgsType()
export class FeedItemSummaryGroupByArgs {

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereInput)
    where?: FeedItemSummaryWhereInput;

    @Field(() => [FeedItemSummaryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeedItemSummaryOrderByWithAggregationInput>;

    @Field(() => [FeedItemSummaryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FeedItemSummaryScalarFieldEnum>;

    @Field(() => FeedItemSummaryScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeedItemSummaryScalarWhereWithAggregatesInput;

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
