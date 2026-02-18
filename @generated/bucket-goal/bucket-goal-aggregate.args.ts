import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Type } from 'class-transformer';
import { BucketGoalOrderByWithRelationInput } from './bucket-goal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalCountAggregateInput } from './bucket-goal-count-aggregate.input';
import { BucketGoalAvgAggregateInput } from './bucket-goal-avg-aggregate.input';
import { BucketGoalSumAggregateInput } from './bucket-goal-sum-aggregate.input';
import { BucketGoalMinAggregateInput } from './bucket-goal-min-aggregate.input';
import { BucketGoalMaxAggregateInput } from './bucket-goal-max-aggregate.input';

@ArgsType()
export class BucketGoalAggregateArgs {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;

    @Field(() => [BucketGoalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketGoalOrderByWithRelationInput>;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

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
