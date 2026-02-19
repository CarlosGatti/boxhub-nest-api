import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionGoalLinkWhereInput } from './bucket-vision-goal-link-where.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkOrderByWithRelationInput } from './bucket-vision-goal-link-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionGoalLinkCountAggregateInput } from './bucket-vision-goal-link-count-aggregate.input';
import { BucketVisionGoalLinkAvgAggregateInput } from './bucket-vision-goal-link-avg-aggregate.input';
import { BucketVisionGoalLinkSumAggregateInput } from './bucket-vision-goal-link-sum-aggregate.input';
import { BucketVisionGoalLinkMinAggregateInput } from './bucket-vision-goal-link-min-aggregate.input';
import { BucketVisionGoalLinkMaxAggregateInput } from './bucket-vision-goal-link-max-aggregate.input';

@ArgsType()
export class BucketVisionGoalLinkAggregateArgs {

    @Field(() => BucketVisionGoalLinkWhereInput, {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereInput)
    where?: BucketVisionGoalLinkWhereInput;

    @Field(() => [BucketVisionGoalLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionGoalLinkOrderByWithRelationInput>;

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketVisionGoalLinkCountAggregateInput, {nullable:true})
    _count?: BucketVisionGoalLinkCountAggregateInput;

    @Field(() => BucketVisionGoalLinkAvgAggregateInput, {nullable:true})
    _avg?: BucketVisionGoalLinkAvgAggregateInput;

    @Field(() => BucketVisionGoalLinkSumAggregateInput, {nullable:true})
    _sum?: BucketVisionGoalLinkSumAggregateInput;

    @Field(() => BucketVisionGoalLinkMinAggregateInput, {nullable:true})
    _min?: BucketVisionGoalLinkMinAggregateInput;

    @Field(() => BucketVisionGoalLinkMaxAggregateInput, {nullable:true})
    _max?: BucketVisionGoalLinkMaxAggregateInput;
}
