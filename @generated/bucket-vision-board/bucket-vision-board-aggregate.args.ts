import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardOrderByWithRelationInput } from './bucket-vision-board-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionBoardCountAggregateInput } from './bucket-vision-board-count-aggregate.input';
import { BucketVisionBoardAvgAggregateInput } from './bucket-vision-board-avg-aggregate.input';
import { BucketVisionBoardSumAggregateInput } from './bucket-vision-board-sum-aggregate.input';
import { BucketVisionBoardMinAggregateInput } from './bucket-vision-board-min-aggregate.input';
import { BucketVisionBoardMaxAggregateInput } from './bucket-vision-board-max-aggregate.input';

@ArgsType()
export class BucketVisionBoardAggregateArgs {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;

    @Field(() => [BucketVisionBoardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionBoardOrderByWithRelationInput>;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketVisionBoardCountAggregateInput, {nullable:true})
    _count?: BucketVisionBoardCountAggregateInput;

    @Field(() => BucketVisionBoardAvgAggregateInput, {nullable:true})
    _avg?: BucketVisionBoardAvgAggregateInput;

    @Field(() => BucketVisionBoardSumAggregateInput, {nullable:true})
    _sum?: BucketVisionBoardSumAggregateInput;

    @Field(() => BucketVisionBoardMinAggregateInput, {nullable:true})
    _min?: BucketVisionBoardMinAggregateInput;

    @Field(() => BucketVisionBoardMaxAggregateInput, {nullable:true})
    _max?: BucketVisionBoardMaxAggregateInput;
}
