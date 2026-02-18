import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalMediaWhereInput } from './bucket-goal-media-where.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaOrderByWithAggregationInput } from './bucket-goal-media-order-by-with-aggregation.input';
import { BucketGoalMediaScalarFieldEnum } from './bucket-goal-media-scalar-field.enum';
import { BucketGoalMediaScalarWhereWithAggregatesInput } from './bucket-goal-media-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalMediaCountAggregateInput } from './bucket-goal-media-count-aggregate.input';
import { BucketGoalMediaAvgAggregateInput } from './bucket-goal-media-avg-aggregate.input';
import { BucketGoalMediaSumAggregateInput } from './bucket-goal-media-sum-aggregate.input';
import { BucketGoalMediaMinAggregateInput } from './bucket-goal-media-min-aggregate.input';
import { BucketGoalMediaMaxAggregateInput } from './bucket-goal-media-max-aggregate.input';

@ArgsType()
export class BucketGoalMediaGroupByArgs {

    @Field(() => BucketGoalMediaWhereInput, {nullable:true})
    @Type(() => BucketGoalMediaWhereInput)
    where?: BucketGoalMediaWhereInput;

    @Field(() => [BucketGoalMediaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BucketGoalMediaOrderByWithAggregationInput>;

    @Field(() => [BucketGoalMediaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BucketGoalMediaScalarFieldEnum>;

    @Field(() => BucketGoalMediaScalarWhereWithAggregatesInput, {nullable:true})
    having?: BucketGoalMediaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketGoalMediaCountAggregateInput, {nullable:true})
    _count?: BucketGoalMediaCountAggregateInput;

    @Field(() => BucketGoalMediaAvgAggregateInput, {nullable:true})
    _avg?: BucketGoalMediaAvgAggregateInput;

    @Field(() => BucketGoalMediaSumAggregateInput, {nullable:true})
    _sum?: BucketGoalMediaSumAggregateInput;

    @Field(() => BucketGoalMediaMinAggregateInput, {nullable:true})
    _min?: BucketGoalMediaMinAggregateInput;

    @Field(() => BucketGoalMediaMaxAggregateInput, {nullable:true})
    _max?: BucketGoalMediaMaxAggregateInput;
}
