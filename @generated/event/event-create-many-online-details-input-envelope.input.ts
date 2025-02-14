import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyOnlineDetailsInput } from './event-create-many-online-details.input';
import { Type } from 'class-transformer';

@InputType()
export class EventCreateManyOnlineDetailsInputEnvelope {

    @Field(() => [EventCreateManyOnlineDetailsInput], {nullable:false})
    @Type(() => EventCreateManyOnlineDetailsInput)
    data!: Array<EventCreateManyOnlineDetailsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
