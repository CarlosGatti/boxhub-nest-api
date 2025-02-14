import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventMemberCountAggregate } from './event-member-count-aggregate.output';
import { EventMemberAvgAggregate } from './event-member-avg-aggregate.output';
import { EventMemberSumAggregate } from './event-member-sum-aggregate.output';
import { EventMemberMinAggregate } from './event-member-min-aggregate.output';
import { EventMemberMaxAggregate } from './event-member-max-aggregate.output';

@ObjectType()
export class AggregateEventMember {

    @Field(() => EventMemberCountAggregate, {nullable:true})
    _count?: EventMemberCountAggregate;

    @Field(() => EventMemberAvgAggregate, {nullable:true})
    _avg?: EventMemberAvgAggregate;

    @Field(() => EventMemberSumAggregate, {nullable:true})
    _sum?: EventMemberSumAggregate;

    @Field(() => EventMemberMinAggregate, {nullable:true})
    _min?: EventMemberMinAggregate;

    @Field(() => EventMemberMaxAggregate, {nullable:true})
    _max?: EventMemberMaxAggregate;
}
