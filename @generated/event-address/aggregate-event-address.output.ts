import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventAddressCountAggregate } from './event-address-count-aggregate.output';
import { EventAddressAvgAggregate } from './event-address-avg-aggregate.output';
import { EventAddressSumAggregate } from './event-address-sum-aggregate.output';
import { EventAddressMinAggregate } from './event-address-min-aggregate.output';
import { EventAddressMaxAggregate } from './event-address-max-aggregate.output';

@ObjectType()
export class AggregateEventAddress {

    @Field(() => EventAddressCountAggregate, {nullable:true})
    _count?: EventAddressCountAggregate;

    @Field(() => EventAddressAvgAggregate, {nullable:true})
    _avg?: EventAddressAvgAggregate;

    @Field(() => EventAddressSumAggregate, {nullable:true})
    _sum?: EventAddressSumAggregate;

    @Field(() => EventAddressMinAggregate, {nullable:true})
    _min?: EventAddressMinAggregate;

    @Field(() => EventAddressMaxAggregate, {nullable:true})
    _max?: EventAddressMaxAggregate;
}
