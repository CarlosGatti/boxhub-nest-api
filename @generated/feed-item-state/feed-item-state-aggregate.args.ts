import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemStateWhereInput } from './feed-item-state-where.input';
import { Type } from 'class-transformer';
import { FeedItemStateOrderByWithRelationInput } from './feed-item-state-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedItemStateCountAggregateInput } from './feed-item-state-count-aggregate.input';
import { FeedItemStateAvgAggregateInput } from './feed-item-state-avg-aggregate.input';
import { FeedItemStateSumAggregateInput } from './feed-item-state-sum-aggregate.input';
import { FeedItemStateMinAggregateInput } from './feed-item-state-min-aggregate.input';
import { FeedItemStateMaxAggregateInput } from './feed-item-state-max-aggregate.input';

@ArgsType()
export class FeedItemStateAggregateArgs {

    @Field(() => FeedItemStateWhereInput, {nullable:true})
    @Type(() => FeedItemStateWhereInput)
    where?: FeedItemStateWhereInput;

    @Field(() => [FeedItemStateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedItemStateOrderByWithRelationInput>;

    @Field(() => FeedItemStateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedItemStateCountAggregateInput, {nullable:true})
    _count?: FeedItemStateCountAggregateInput;

    @Field(() => FeedItemStateAvgAggregateInput, {nullable:true})
    _avg?: FeedItemStateAvgAggregateInput;

    @Field(() => FeedItemStateSumAggregateInput, {nullable:true})
    _sum?: FeedItemStateSumAggregateInput;

    @Field(() => FeedItemStateMinAggregateInput, {nullable:true})
    _min?: FeedItemStateMinAggregateInput;

    @Field(() => FeedItemStateMaxAggregateInput, {nullable:true})
    _max?: FeedItemStateMaxAggregateInput;
}
