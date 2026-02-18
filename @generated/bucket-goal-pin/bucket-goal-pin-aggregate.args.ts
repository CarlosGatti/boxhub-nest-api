import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalPinWhereInput } from './bucket-goal-pin-where.input';
import { Type } from 'class-transformer';
import { BucketGoalPinOrderByWithRelationInput } from './bucket-goal-pin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketGoalPinWhereUniqueInput } from './bucket-goal-pin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalPinCountAggregateInput } from './bucket-goal-pin-count-aggregate.input';
import { BucketGoalPinAvgAggregateInput } from './bucket-goal-pin-avg-aggregate.input';
import { BucketGoalPinSumAggregateInput } from './bucket-goal-pin-sum-aggregate.input';
import { BucketGoalPinMinAggregateInput } from './bucket-goal-pin-min-aggregate.input';
import { BucketGoalPinMaxAggregateInput } from './bucket-goal-pin-max-aggregate.input';

@ArgsType()
export class BucketGoalPinAggregateArgs {

    @Field(() => BucketGoalPinWhereInput, {nullable:true})
    @Type(() => BucketGoalPinWhereInput)
    where?: BucketGoalPinWhereInput;

    @Field(() => [BucketGoalPinOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketGoalPinOrderByWithRelationInput>;

    @Field(() => BucketGoalPinWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>;

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
