import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Type } from 'class-transformer';
import { BucketGoalOrderByWithAggregationInput } from './bucket-goal-order-by-with-aggregation.input';
import { BucketGoalScalarFieldEnum } from './bucket-goal-scalar-field.enum';
import { BucketGoalScalarWhereWithAggregatesInput } from './bucket-goal-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalCountAggregateInput } from './bucket-goal-count-aggregate.input';
import { BucketGoalAvgAggregateInput } from './bucket-goal-avg-aggregate.input';
import { BucketGoalSumAggregateInput } from './bucket-goal-sum-aggregate.input';
import { BucketGoalMinAggregateInput } from './bucket-goal-min-aggregate.input';
import { BucketGoalMaxAggregateInput } from './bucket-goal-max-aggregate.input';

@ArgsType()
export class BucketGoalGroupByArgs {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;

    @Field(() => [BucketGoalOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BucketGoalOrderByWithAggregationInput>;

    @Field(() => [BucketGoalScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BucketGoalScalarFieldEnum>;

    @Field(() => BucketGoalScalarWhereWithAggregatesInput, {nullable:true})
    having?: BucketGoalScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketGoalCountAggregateInput, {nullable:true})
    _count?: BucketGoalCountAggregateInput;

    @Field(() => BucketGoalAvgAggregateInput, {nullable:true})
    _avg?: BucketGoalAvgAggregateInput;

    @Field(() => BucketGoalSumAggregateInput, {nullable:true})
    _sum?: BucketGoalSumAggregateInput;

    @Field(() => BucketGoalMinAggregateInput, {nullable:true})
    _min?: BucketGoalMinAggregateInput;

    @Field(() => BucketGoalMaxAggregateInput, {nullable:true})
    _max?: BucketGoalMaxAggregateInput;
}
