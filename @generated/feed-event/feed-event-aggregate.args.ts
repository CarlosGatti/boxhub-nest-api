import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedEventWhereInput } from './feed-event-where.input';
import { Type } from 'class-transformer';
import { FeedEventOrderByWithRelationInput } from './feed-event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedEventCountAggregateInput } from './feed-event-count-aggregate.input';
import { FeedEventAvgAggregateInput } from './feed-event-avg-aggregate.input';
import { FeedEventSumAggregateInput } from './feed-event-sum-aggregate.input';
import { FeedEventMinAggregateInput } from './feed-event-min-aggregate.input';
import { FeedEventMaxAggregateInput } from './feed-event-max-aggregate.input';

@ArgsType()
export class FeedEventAggregateArgs {

    @Field(() => FeedEventWhereInput, {nullable:true})
    @Type(() => FeedEventWhereInput)
    where?: FeedEventWhereInput;

    @Field(() => [FeedEventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedEventOrderByWithRelationInput>;

    @Field(() => FeedEventWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedEventCountAggregateInput, {nullable:true})
    _count?: FeedEventCountAggregateInput;

    @Field(() => FeedEventAvgAggregateInput, {nullable:true})
    _avg?: FeedEventAvgAggregateInput;

    @Field(() => FeedEventSumAggregateInput, {nullable:true})
    _sum?: FeedEventSumAggregateInput;

    @Field(() => FeedEventMinAggregateInput, {nullable:true})
    _min?: FeedEventMinAggregateInput;

    @Field(() => FeedEventMaxAggregateInput, {nullable:true})
    _max?: FeedEventMaxAggregateInput;
}
