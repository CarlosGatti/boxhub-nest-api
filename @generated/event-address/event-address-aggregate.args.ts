import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventAddressWhereInput } from './event-address-where.input';
import { Type } from 'class-transformer';
import { EventAddressOrderByWithRelationInput } from './event-address-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventAddressWhereUniqueInput } from './event-address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventAddressCountAggregateInput } from './event-address-count-aggregate.input';
import { EventAddressAvgAggregateInput } from './event-address-avg-aggregate.input';
import { EventAddressSumAggregateInput } from './event-address-sum-aggregate.input';
import { EventAddressMinAggregateInput } from './event-address-min-aggregate.input';
import { EventAddressMaxAggregateInput } from './event-address-max-aggregate.input';

@ArgsType()
export class EventAddressAggregateArgs {

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    where?: EventAddressWhereInput;

    @Field(() => [EventAddressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventAddressOrderByWithRelationInput>;

    @Field(() => EventAddressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventAddressWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventAddressCountAggregateInput, {nullable:true})
    _count?: EventAddressCountAggregateInput;

    @Field(() => EventAddressAvgAggregateInput, {nullable:true})
    _avg?: EventAddressAvgAggregateInput;

    @Field(() => EventAddressSumAggregateInput, {nullable:true})
    _sum?: EventAddressSumAggregateInput;

    @Field(() => EventAddressMinAggregateInput, {nullable:true})
    _min?: EventAddressMinAggregateInput;

    @Field(() => EventAddressMaxAggregateInput, {nullable:true})
    _max?: EventAddressMaxAggregateInput;
}
