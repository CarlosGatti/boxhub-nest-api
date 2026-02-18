import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalLogWhereInput } from './bucket-goal-log-where.input';
import { Type } from 'class-transformer';
import { BucketGoalLogOrderByWithRelationInput } from './bucket-goal-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalLogCountAggregateInput } from './bucket-goal-log-count-aggregate.input';
import { BucketGoalLogAvgAggregateInput } from './bucket-goal-log-avg-aggregate.input';
import { BucketGoalLogSumAggregateInput } from './bucket-goal-log-sum-aggregate.input';
import { BucketGoalLogMinAggregateInput } from './bucket-goal-log-min-aggregate.input';
import { BucketGoalLogMaxAggregateInput } from './bucket-goal-log-max-aggregate.input';

@ArgsType()
export class BucketGoalLogAggregateArgs {

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    @Type(() => BucketGoalLogWhereInput)
    where?: BucketGoalLogWhereInput;

    @Field(() => [BucketGoalLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketGoalLogOrderByWithRelationInput>;

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketGoalLogCountAggregateInput, {nullable:true})
    _count?: BucketGoalLogCountAggregateInput;

    @Field(() => BucketGoalLogAvgAggregateInput, {nullable:true})
    _avg?: BucketGoalLogAvgAggregateInput;

    @Field(() => BucketGoalLogSumAggregateInput, {nullable:true})
    _sum?: BucketGoalLogSumAggregateInput;

    @Field(() => BucketGoalLogMinAggregateInput, {nullable:true})
    _min?: BucketGoalLogMinAggregateInput;

    @Field(() => BucketGoalLogMaxAggregateInput, {nullable:true})
    _max?: BucketGoalLogMaxAggregateInput;
}
