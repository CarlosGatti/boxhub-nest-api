import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyAddressInput } from './event-create-many-address.input';
import { Type } from 'class-transformer';

@InputType()
export class EventCreateManyAddressInputEnvelope {

    @Field(() => [EventCreateManyAddressInput], {nullable:false})
    @Type(() => EventCreateManyAddressInput)
    data!: Array<EventCreateManyAddressInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
