import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalPinWhereInput } from './bucket-goal-pin-where.input';
import { Type } from 'class-transformer';
import { BucketGoalPinOrderByWithAggregationInput } from './bucket-goal-pin-order-by-with-aggregation.input';
import { BucketGoalPinScalarFieldEnum } from './bucket-goal-pin-scalar-field.enum';
import { BucketGoalPinScalarWhereWithAggregatesInput } from './bucket-goal-pin-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalPinCountAggregateInput } from './bucket-goal-pin-count-aggregate.input';
import { BucketGoalPinAvgAggregateInput } from './bucket-goal-pin-avg-aggregate.input';
import { BucketGoalPinSumAggregateInput } from './bucket-goal-pin-sum-aggregate.input';
import { BucketGoalPinMinAggregateInput } from './bucket-goal-pin-min-aggregate.input';
import { BucketGoalPinMaxAggregateInput } from './bucket-goal-pin-max-aggregate.input';

@ArgsType()
export class BucketGoalPinGroupByArgs {

    @Field(() => BucketGoalPinWhereInput, {nullable:true})
    @Type(() => BucketGoalPinWhereInput)
    where?: BucketGoalPinWhereInput;

    @Field(() => [BucketGoalPinOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BucketGoalPinOrderByWithAggregationInput>;

    @Field(() => [BucketGoalPinScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BucketGoalPinScalarFieldEnum>;

    @Field(() => BucketGoalPinScalarWhereWithAggregatesInput, {nullable:true})
    having?: BucketGoalPinScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketGoalPinCountAggregateInput, {nullable:true})
    _count?: BucketGoalPinCountAggregateInput;

    @Field(() => BucketGoalPinAvgAggregateInput, {nullable:true})
    _avg?: BucketGoalPinAvgAggregateInput;

    @Field(() => BucketGoalPinSumAggregateInput, {nullable:true})
    _sum?: BucketGoalPinSumAggregateInput;

    @Field(() => BucketGoalPinMinAggregateInput, {nullable:true})
    _min?: BucketGoalPinMinAggregateInput;

    @Field(() => BucketGoalPinMaxAggregateInput, {nullable:true})
    _max?: BucketGoalPinMaxAggregateInput;
}
