import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedCollectionWhereInput } from './feed-collection-where.input';
import { Type } from 'class-transformer';
import { FeedCollectionOrderByWithAggregationInput } from './feed-collection-order-by-with-aggregation.input';
import { FeedCollectionScalarFieldEnum } from './feed-collection-scalar-field.enum';
import { FeedCollectionScalarWhereWithAggregatesInput } from './feed-collection-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedCollectionCountAggregateInput } from './feed-collection-count-aggregate.input';
import { FeedCollectionAvgAggregateInput } from './feed-collection-avg-aggregate.input';
import { FeedCollectionSumAggregateInput } from './feed-collection-sum-aggregate.input';
import { FeedCollectionMinAggregateInput } from './feed-collection-min-aggregate.input';
import { FeedCollectionMaxAggregateInput } from './feed-collection-max-aggregate.input';

@ArgsType()
export class FeedCollectionGroupByArgs {

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    @Type(() => FeedCollectionWhereInput)
    where?: FeedCollectionWhereInput;

    @Field(() => [FeedCollectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeedCollectionOrderByWithAggregationInput>;

    @Field(() => [FeedCollectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FeedCollectionScalarFieldEnum>;

    @Field(() => FeedCollectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeedCollectionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedCollectionCountAggregateInput, {nullable:true})
    _count?: FeedCollectionCountAggregateInput;

    @Field(() => FeedCollectionAvgAggregateInput, {nullable:true})
    _avg?: FeedCollectionAvgAggregateInput;

    @Field(() => FeedCollectionSumAggregateInput, {nullable:true})
    _sum?: FeedCollectionSumAggregateInput;

    @Field(() => FeedCollectionMinAggregateInput, {nullable:true})
    _min?: FeedCollectionMinAggregateInput;

    @Field(() => FeedCollectionMaxAggregateInput, {nullable:true})
    _max?: FeedCollectionMaxAggregateInput;
}
