import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';
import { Type } from 'class-transformer';
import { FeedSourceOrderByWithRelationInput } from './feed-source-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedSourceCountAggregateInput } from './feed-source-count-aggregate.input';
import { FeedSourceAvgAggregateInput } from './feed-source-avg-aggregate.input';
import { FeedSourceSumAggregateInput } from './feed-source-sum-aggregate.input';
import { FeedSourceMinAggregateInput } from './feed-source-min-aggregate.input';
import { FeedSourceMaxAggregateInput } from './feed-source-max-aggregate.input';

@ArgsType()
export class FeedSourceAggregateArgs {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;

    @Field(() => [FeedSourceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedSourceOrderByWithRelationInput>;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedSourceCountAggregateInput, {nullable:true})
    _count?: FeedSourceCountAggregateInput;

    @Field(() => FeedSourceAvgAggregateInput, {nullable:true})
    _avg?: FeedSourceAvgAggregateInput;

    @Field(() => FeedSourceSumAggregateInput, {nullable:true})
    _sum?: FeedSourceSumAggregateInput;

    @Field(() => FeedSourceMinAggregateInput, {nullable:true})
    _min?: FeedSourceMinAggregateInput;

    @Field(() => FeedSourceMaxAggregateInput, {nullable:true})
    _max?: FeedSourceMaxAggregateInput;
}
