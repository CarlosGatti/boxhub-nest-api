import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventAddressWhereInput } from './event-address-where.input';
import { Type } from 'class-transformer';
import { EventAddressOrderByWithAggregationInput } from './event-address-order-by-with-aggregation.input';
import { EventAddressScalarFieldEnum } from './event-address-scalar-field.enum';
import { EventAddressScalarWhereWithAggregatesInput } from './event-address-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventAddressCountAggregateInput } from './event-address-count-aggregate.input';
import { EventAddressAvgAggregateInput } from './event-address-avg-aggregate.input';
import { EventAddressSumAggregateInput } from './event-address-sum-aggregate.input';
import { EventAddressMinAggregateInput } from './event-address-min-aggregate.input';
import { EventAddressMaxAggregateInput } from './event-address-max-aggregate.input';

@ArgsType()
export class EventAddressGroupByArgs {

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    where?: EventAddressWhereInput;

    @Field(() => [EventAddressOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventAddressOrderByWithAggregationInput>;

    @Field(() => [EventAddressScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventAddressScalarFieldEnum>;

    @Field(() => EventAddressScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventAddressScalarWhereWithAggregatesInput;

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
