import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedProfileWhereInput } from './feed-profile-where.input';
import { Type } from 'class-transformer';
import { FeedProfileOrderByWithAggregationInput } from './feed-profile-order-by-with-aggregation.input';
import { FeedProfileScalarFieldEnum } from './feed-profile-scalar-field.enum';
import { FeedProfileScalarWhereWithAggregatesInput } from './feed-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedProfileCountAggregateInput } from './feed-profile-count-aggregate.input';
import { FeedProfileAvgAggregateInput } from './feed-profile-avg-aggregate.input';
import { FeedProfileSumAggregateInput } from './feed-profile-sum-aggregate.input';
import { FeedProfileMinAggregateInput } from './feed-profile-min-aggregate.input';
import { FeedProfileMaxAggregateInput } from './feed-profile-max-aggregate.input';

@ArgsType()
export class FeedProfileGroupByArgs {

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    where?: FeedProfileWhereInput;

    @Field(() => [FeedProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeedProfileOrderByWithAggregationInput>;

    @Field(() => [FeedProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FeedProfileScalarFieldEnum>;

    @Field(() => FeedProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeedProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedProfileCountAggregateInput, {nullable:true})
    _count?: FeedProfileCountAggregateInput;

    @Field(() => FeedProfileAvgAggregateInput, {nullable:true})
    _avg?: FeedProfileAvgAggregateInput;

    @Field(() => FeedProfileSumAggregateInput, {nullable:true})
    _sum?: FeedProfileSumAggregateInput;

    @Field(() => FeedProfileMinAggregateInput, {nullable:true})
    _min?: FeedProfileMinAggregateInput;

    @Field(() => FeedProfileMaxAggregateInput, {nullable:true})
    _max?: FeedProfileMaxAggregateInput;
}
