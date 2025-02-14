import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventAddressWhereInput } from './event-address-where.input';
import { Type } from 'class-transformer';
import { EventAddressUpdateWithoutEventInput } from './event-address-update-without-event.input';

@InputType()
export class EventAddressUpdateToOneWithWhereWithoutEventInput {

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    where?: EventAddressWhereInput;

    @Field(() => EventAddressUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventAddressUpdateWithoutEventInput)
    data!: EventAddressUpdateWithoutEventInput;
}
