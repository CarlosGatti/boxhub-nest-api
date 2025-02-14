import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventMemberWhereInput } from './event-member-where.input';
import { Type } from 'class-transformer';
import { EventMemberOrderByWithRelationInput } from './event-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventMemberCountAggregateInput } from './event-member-count-aggregate.input';
import { EventMemberAvgAggregateInput } from './event-member-avg-aggregate.input';
import { EventMemberSumAggregateInput } from './event-member-sum-aggregate.input';
import { EventMemberMinAggregateInput } from './event-member-min-aggregate.input';
import { EventMemberMaxAggregateInput } from './event-member-max-aggregate.input';

@ArgsType()
export class EventMemberAggregateArgs {

    @Field(() => EventMemberWhereInput, {nullable:true})
    @Type(() => EventMemberWhereInput)
    where?: EventMemberWhereInput;

    @Field(() => [EventMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventMemberOrderByWithRelationInput>;

    @Field(() => EventMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventMemberCountAggregateInput, {nullable:true})
    _count?: EventMemberCountAggregateInput;

    @Field(() => EventMemberAvgAggregateInput, {nullable:true})
    _avg?: EventMemberAvgAggregateInput;

    @Field(() => EventMemberSumAggregateInput, {nullable:true})
    _sum?: EventMemberSumAggregateInput;

    @Field(() => EventMemberMinAggregateInput, {nullable:true})
    _min?: EventMemberMinAggregateInput;

    @Field(() => EventMemberMaxAggregateInput, {nullable:true})
    _max?: EventMemberMaxAggregateInput;
}
