import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventAddressCountAggregate } from './event-address-count-aggregate.output';
import { EventAddressAvgAggregate } from './event-address-avg-aggregate.output';
import { EventAddressSumAggregate } from './event-address-sum-aggregate.output';
import { EventAddressMinAggregate } from './event-address-min-aggregate.output';
import { EventAddressMaxAggregate } from './event-address-max-aggregate.output';

@ObjectType()
export class EventAddressGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
