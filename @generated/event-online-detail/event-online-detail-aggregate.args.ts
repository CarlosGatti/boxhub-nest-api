import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventOnlineDetailWhereInput } from './event-online-detail-where.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailOrderByWithRelationInput } from './event-online-detail-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventOnlineDetailWhereUniqueInput } from './event-online-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventOnlineDetailCountAggregateInput } from './event-online-detail-count-aggregate.input';
import { EventOnlineDetailAvgAggregateInput } from './event-online-detail-avg-aggregate.input';
import { EventOnlineDetailSumAggregateInput } from './event-online-detail-sum-aggregate.input';
import { EventOnlineDetailMinAggregateInput } from './event-online-detail-min-aggregate.input';
import { EventOnlineDetailMaxAggregateInput } from './event-online-detail-max-aggregate.input';

@ArgsType()
export class EventOnlineDetailAggregateArgs {

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereInput)
    where?: EventOnlineDetailWhereInput;

    @Field(() => [EventOnlineDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventOnlineDetailOrderByWithRelationInput>;

    @Field(() => EventOnlineDetailWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventOnlineDetailWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventOnlineDetailCountAggregateInput, {nullable:true})
    _count?: EventOnlineDetailCountAggregateInput;

    @Field(() => EventOnlineDetailAvgAggregateInput, {nullable:true})
    _avg?: EventOnlineDetailAvgAggregateInput;

    @Field(() => EventOnlineDetailSumAggregateInput, {nullable:true})
    _sum?: EventOnlineDetailSumAggregateInput;

    @Field(() => EventOnlineDetailMinAggregateInput, {nullable:true})
    _min?: EventOnlineDetailMinAggregateInput;

    @Field(() => EventOnlineDetailMaxAggregateInput, {nullable:true})
    _max?: EventOnlineDetailMaxAggregateInput;
}
