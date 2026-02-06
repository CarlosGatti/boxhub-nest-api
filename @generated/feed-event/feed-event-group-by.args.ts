import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedEventWhereInput } from './feed-event-where.input';
import { Type } from 'class-transformer';
import { FeedEventOrderByWithAggregationInput } from './feed-event-order-by-with-aggregation.input';
import { FeedEventScalarFieldEnum } from './feed-event-scalar-field.enum';
import { FeedEventScalarWhereWithAggregatesInput } from './feed-event-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedEventCountAggregateInput } from './feed-event-count-aggregate.input';
import { FeedEventAvgAggregateInput } from './feed-event-avg-aggregate.input';
import { FeedEventSumAggregateInput } from './feed-event-sum-aggregate.input';
import { FeedEventMinAggregateInput } from './feed-event-min-aggregate.input';
import { FeedEventMaxAggregateInput } from './feed-event-max-aggregate.input';

@ArgsType()
export class FeedEventGroupByArgs {

    @Field(() => FeedEventWhereInput, {nullable:true})
    @Type(() => FeedEventWhereInput)
    where?: FeedEventWhereInput;

    @Field(() => [FeedEventOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeedEventOrderByWithAggregationInput>;

    @Field(() => [FeedEventScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FeedEventScalarFieldEnum>;

    @Field(() => FeedEventScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeedEventScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedEventCountAggregateInput, {nullable:true})
    _count?: FeedEventCountAggregateInput;

    @Field(() => FeedEventAvgAggregateInput, {nullable:true})
    _avg?: FeedEventAvgAggregateInput;

    @Field(() => FeedEventSumAggregateInput, {nullable:true})
    _sum?: FeedEventSumAggregateInput;

    @Field(() => FeedEventMinAggregateInput, {nullable:true})
    _min?: FeedEventMinAggregateInput;

    @Field(() => FeedEventMaxAggregateInput, {nullable:true})
    _max?: FeedEventMaxAggregateInput;
}
