import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemWhereInput } from './feed-item-where.input';
import { Type } from 'class-transformer';
import { FeedItemOrderByWithRelationInput } from './feed-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedItemCountAggregateInput } from './feed-item-count-aggregate.input';
import { FeedItemAvgAggregateInput } from './feed-item-avg-aggregate.input';
import { FeedItemSumAggregateInput } from './feed-item-sum-aggregate.input';
import { FeedItemMinAggregateInput } from './feed-item-min-aggregate.input';
import { FeedItemMaxAggregateInput } from './feed-item-max-aggregate.input';

@ArgsType()
export class FeedItemAggregateArgs {

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;

    @Field(() => [FeedItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedItemOrderByWithRelationInput>;

    @Field(() => FeedItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedItemCountAggregateInput, {nullable:true})
    _count?: FeedItemCountAggregateInput;

    @Field(() => FeedItemAvgAggregateInput, {nullable:true})
    _avg?: FeedItemAvgAggregateInput;

    @Field(() => FeedItemSumAggregateInput, {nullable:true})
    _sum?: FeedItemSumAggregateInput;

    @Field(() => FeedItemMinAggregateInput, {nullable:true})
    _min?: FeedItemMinAggregateInput;

    @Field(() => FeedItemMaxAggregateInput, {nullable:true})
    _max?: FeedItemMaxAggregateInput;
}
