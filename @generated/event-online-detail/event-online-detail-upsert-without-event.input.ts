import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOnlineDetailUpdateWithoutEventInput } from './event-online-detail-update-without-event.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailCreateWithoutEventInput } from './event-online-detail-create-without-event.input';
import { EventOnlineDetailWhereInput } from './event-online-detail-where.input';

@InputType()
export class EventOnlineDetailUpsertWithoutEventInput {

    @Field(() => EventOnlineDetailUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventOnlineDetailUpdateWithoutEventInput)
    update!: EventOnlineDetailUpdateWithoutEventInput;

    @Field(() => EventOnlineDetailCreateWithoutEventInput, {nullable:false})
    @Type(() => EventOnlineDetailCreateWithoutEventInput)
    create!: EventOnlineDetailCreateWithoutEventInput;

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereInput)
    where?: EventOnlineDetailWhereInput;
}
