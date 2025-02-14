import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventOnlineDetailCountAggregate } from './event-online-detail-count-aggregate.output';
import { EventOnlineDetailAvgAggregate } from './event-online-detail-avg-aggregate.output';
import { EventOnlineDetailSumAggregate } from './event-online-detail-sum-aggregate.output';
import { EventOnlineDetailMinAggregate } from './event-online-detail-min-aggregate.output';
import { EventOnlineDetailMaxAggregate } from './event-online-detail-max-aggregate.output';

@ObjectType()
export class AggregateEventOnlineDetail {

    @Field(() => EventOnlineDetailCountAggregate, {nullable:true})
    _count?: EventOnlineDetailCountAggregate;

    @Field(() => EventOnlineDetailAvgAggregate, {nullable:true})
    _avg?: EventOnlineDetailAvgAggregate;

    @Field(() => EventOnlineDetailSumAggregate, {nullable:true})
    _sum?: EventOnlineDetailSumAggregate;

    @Field(() => EventOnlineDetailMinAggregate, {nullable:true})
    _min?: EventOnlineDetailMinAggregate;

    @Field(() => EventOnlineDetailMaxAggregate, {nullable:true})
    _max?: EventOnlineDetailMaxAggregate;
}
