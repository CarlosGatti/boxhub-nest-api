import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourcePreferenceWhereInput } from './feed-source-preference-where.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceOrderByWithAggregationInput } from './feed-source-preference-order-by-with-aggregation.input';
import { FeedSourcePreferenceScalarFieldEnum } from './feed-source-preference-scalar-field.enum';
import { FeedSourcePreferenceScalarWhereWithAggregatesInput } from './feed-source-preference-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedSourcePreferenceCountAggregateInput } from './feed-source-preference-count-aggregate.input';
import { FeedSourcePreferenceAvgAggregateInput } from './feed-source-preference-avg-aggregate.input';
import { FeedSourcePreferenceSumAggregateInput } from './feed-source-preference-sum-aggregate.input';
import { FeedSourcePreferenceMinAggregateInput } from './feed-source-preference-min-aggregate.input';
import { FeedSourcePreferenceMaxAggregateInput } from './feed-source-preference-max-aggregate.input';

@ArgsType()
export class FeedSourcePreferenceGroupByArgs {

    @Field(() => FeedSourcePreferenceWhereInput, {nullable:true})
    @Type(() => FeedSourcePreferenceWhereInput)
    where?: FeedSourcePreferenceWhereInput;

    @Field(() => [FeedSourcePreferenceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeedSourcePreferenceOrderByWithAggregationInput>;

    @Field(() => [FeedSourcePreferenceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FeedSourcePreferenceScalarFieldEnum>;

    @Field(() => FeedSourcePreferenceScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeedSourcePreferenceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedSourcePreferenceCountAggregateInput, {nullable:true})
    _count?: FeedSourcePreferenceCountAggregateInput;

    @Field(() => FeedSourcePreferenceAvgAggregateInput, {nullable:true})
    _avg?: FeedSourcePreferenceAvgAggregateInput;

    @Field(() => FeedSourcePreferenceSumAggregateInput, {nullable:true})
    _sum?: FeedSourcePreferenceSumAggregateInput;

    @Field(() => FeedSourcePreferenceMinAggregateInput, {nullable:true})
    _min?: FeedSourcePreferenceMinAggregateInput;

    @Field(() => FeedSourcePreferenceMaxAggregateInput, {nullable:true})
    _max?: FeedSourcePreferenceMaxAggregateInput;
}
