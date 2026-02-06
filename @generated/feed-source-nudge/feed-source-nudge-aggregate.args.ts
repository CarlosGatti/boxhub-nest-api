import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceNudgeWhereInput } from './feed-source-nudge-where.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeOrderByWithRelationInput } from './feed-source-nudge-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedSourceNudgeCountAggregateInput } from './feed-source-nudge-count-aggregate.input';
import { FeedSourceNudgeAvgAggregateInput } from './feed-source-nudge-avg-aggregate.input';
import { FeedSourceNudgeSumAggregateInput } from './feed-source-nudge-sum-aggregate.input';
import { FeedSourceNudgeMinAggregateInput } from './feed-source-nudge-min-aggregate.input';
import { FeedSourceNudgeMaxAggregateInput } from './feed-source-nudge-max-aggregate.input';

@ArgsType()
export class FeedSourceNudgeAggregateArgs {

    @Field(() => FeedSourceNudgeWhereInput, {nullable:true})
    @Type(() => FeedSourceNudgeWhereInput)
    where?: FeedSourceNudgeWhereInput;

    @Field(() => [FeedSourceNudgeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedSourceNudgeOrderByWithRelationInput>;

    @Field(() => FeedSourceNudgeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeedSourceNudgeCountAggregateInput, {nullable:true})
    _count?: FeedSourceNudgeCountAggregateInput;

    @Field(() => FeedSourceNudgeAvgAggregateInput, {nullable:true})
    _avg?: FeedSourceNudgeAvgAggregateInput;

    @Field(() => FeedSourceNudgeSumAggregateInput, {nullable:true})
    _sum?: FeedSourceNudgeSumAggregateInput;

    @Field(() => FeedSourceNudgeMinAggregateInput, {nullable:true})
    _min?: FeedSourceNudgeMinAggregateInput;

    @Field(() => FeedSourceNudgeMaxAggregateInput, {nullable:true})
    _max?: FeedSourceNudgeMaxAggregateInput;
}
