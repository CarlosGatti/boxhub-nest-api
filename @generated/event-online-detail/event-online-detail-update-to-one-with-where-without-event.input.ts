import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOnlineDetailWhereInput } from './event-online-detail-where.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailUpdateWithoutEventInput } from './event-online-detail-update-without-event.input';

@InputType()
export class EventOnlineDetailUpdateToOneWithWhereWithoutEventInput {

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereInput)
    where?: EventOnlineDetailWhereInput;

    @Field(() => EventOnlineDetailUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventOnlineDetailUpdateWithoutEventInput)
    data!: EventOnlineDetailUpdateWithoutEventInput;
}
