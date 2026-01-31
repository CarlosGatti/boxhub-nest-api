import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemStateWhereInput } from './feed-item-state-where.input';
import { Type } from 'class-transformer';
import { FeedItemStateOrderByWithAggregationInput } from './feed-item-state-order-by-with-aggregation.input';
import { FeedItemStateScalarFieldEnum } from './feed-item-state-scalar-field.enum';
import { FeedItemStateScalarWhereWithAggregatesInput } from './feed-item-state-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedItemStateCountAggregateInput } from './feed-item-state-count-aggregate.input';
import { FeedItemStateAvgAggregateInput } from './feed-item-state-avg-aggregate.input';
import { FeedItemStateSumAggregateInput } from './feed-item-state-sum-aggregate.input';
import { FeedItemStateMinAggregateInput } from './feed-item-state-min-aggregate.input';
import { FeedItemStateMaxAggregateInput } from './feed-item-state-max-aggregate.input';

@ArgsType()
export class FeedItemStateGroupByArgs {

    @Field(() => FeedItemStateWhereInput, {nullable:true})
    @Type(() => FeedItemStateWhereInput)
    where?: FeedItemStateWhereInput;

    @Field(() => [FeedItemStateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeedItemStateOrderByWithAggregationInput>;

    @Field(() => [FeedItemStateScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FeedItemStateScalarFieldEnum>;

    @Field(() => FeedItemStateScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeedItemStateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedItemStateCountAggregateInput, {nullable:true})
    _count?: FeedItemStateCountAggregateInput;

    @Field(() => FeedItemStateAvgAggregateInput, {nullable:true})
    _avg?: FeedItemStateAvgAggregateInput;

    @Field(() => FeedItemStateSumAggregateInput, {nullable:true})
    _sum?: FeedItemStateSumAggregateInput;

    @Field(() => FeedItemStateMinAggregateInput, {nullable:true})
    _min?: FeedItemStateMinAggregateInput;

    @Field(() => FeedItemStateMaxAggregateInput, {nullable:true})
    _max?: FeedItemStateMaxAggregateInput;
}
