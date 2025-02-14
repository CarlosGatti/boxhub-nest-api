import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventAddressUpdateWithoutEventInput } from './event-address-update-without-event.input';
import { Type } from 'class-transformer';
import { EventAddressCreateWithoutEventInput } from './event-address-create-without-event.input';
import { EventAddressWhereInput } from './event-address-where.input';

@InputType()
export class EventAddressUpsertWithoutEventInput {

    @Field(() => EventAddressUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventAddressUpdateWithoutEventInput)
    update!: EventAddressUpdateWithoutEventInput;

    @Field(() => EventAddressCreateWithoutEventInput, {nullable:false})
    @Type(() => EventAddressCreateWithoutEventInput)
    create!: EventAddressCreateWithoutEventInput;

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    where?: EventAddressWhereInput;
}
