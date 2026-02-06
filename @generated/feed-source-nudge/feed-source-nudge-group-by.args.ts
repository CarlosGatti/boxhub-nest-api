import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceNudgeWhereInput } from './feed-source-nudge-where.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeOrderByWithAggregationInput } from './feed-source-nudge-order-by-with-aggregation.input';
import { FeedSourceNudgeScalarFieldEnum } from './feed-source-nudge-scalar-field.enum';
import { FeedSourceNudgeScalarWhereWithAggregatesInput } from './feed-source-nudge-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedSourceNudgeCountAggregateInput } from './feed-source-nudge-count-aggregate.input';
import { FeedSourceNudgeAvgAggregateInput } from './feed-source-nudge-avg-aggregate.input';
import { FeedSourceNudgeSumAggregateInput } from './feed-source-nudge-sum-aggregate.input';
import { FeedSourceNudgeMinAggregateInput } from './feed-source-nudge-min-aggregate.input';
import { FeedSourceNudgeMaxAggregateInput } from './feed-source-nudge-max-aggregate.input';

@ArgsType()
export class FeedSourceNudgeGroupByArgs {

    @Field(() => FeedSourceNudgeWhereInput, {nullable:true})
    @Type(() => FeedSourceNudgeWhereInput)
    where?: FeedSourceNudgeWhereInput;

    @Field(() => [FeedSourceNudgeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeedSourceNudgeOrderByWithAggregationInput>;

    @Field(() => [FeedSourceNudgeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FeedSourceNudgeScalarFieldEnum>;

    @Field(() => FeedSourceNudgeScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeedSourceNudgeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedSourceNudgeCountAggregateInput, {nullable:true})
    _count?: FeedSourceNudgeCountAggregateInput;

    @Field(() => FeedSourceNudgeAvgAggregateInput, {nullable:true})
    _avg?: FeedSourceNudgeAvgAggregateInput;

    @Field(() => FeedSourceNudgeSumAggregateInput, {nullable:true})
    _sum?: FeedSourceNudgeSumAggregateInput;

    @Field(() => FeedSourceNudgeMinAggregateInput, {nullable:true})
    _min?: FeedSourceNudgeMinAggregateInput;

    @Field(() => FeedSourceNudgeMaxAggregateInput, {nullable:true})
    _max?: FeedSourceNudgeMaxAggregateInput;
}
