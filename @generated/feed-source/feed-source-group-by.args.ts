import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';
import { Type } from 'class-transformer';
import { FeedSourceOrderByWithAggregationInput } from './feed-source-order-by-with-aggregation.input';
import { FeedSourceScalarFieldEnum } from './feed-source-scalar-field.enum';
import { FeedSourceScalarWhereWithAggregatesInput } from './feed-source-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedSourceCountAggregateInput } from './feed-source-count-aggregate.input';
import { FeedSourceAvgAggregateInput } from './feed-source-avg-aggregate.input';
import { FeedSourceSumAggregateInput } from './feed-source-sum-aggregate.input';
import { FeedSourceMinAggregateInput } from './feed-source-min-aggregate.input';
import { FeedSourceMaxAggregateInput } from './feed-source-max-aggregate.input';

@ArgsType()
export class FeedSourceGroupByArgs {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;

    @Field(() => [FeedSourceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeedSourceOrderByWithAggregationInput>;

    @Field(() => [FeedSourceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FeedSourceScalarFieldEnum>;

    @Field(() => FeedSourceScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeedSourceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedSourceCountAggregateInput, {nullable:true})
    _count?: FeedSourceCountAggregateInput;

    @Field(() => FeedSourceAvgAggregateInput, {nullable:true})
    _avg?: FeedSourceAvgAggregateInput;

    @Field(() => FeedSourceSumAggregateInput, {nullable:true})
    _sum?: FeedSourceSumAggregateInput;

    @Field(() => FeedSourceMinAggregateInput, {nullable:true})
    _min?: FeedSourceMinAggregateInput;

    @Field(() => FeedSourceMaxAggregateInput, {nullable:true})
    _max?: FeedSourceMaxAggregateInput;
}
