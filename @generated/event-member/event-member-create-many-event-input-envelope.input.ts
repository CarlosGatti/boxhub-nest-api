import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberCreateManyEventInput } from './event-member-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class EventMemberCreateManyEventInputEnvelope {

    @Field(() => [EventMemberCreateManyEventInput], {nullable:false})
    @Type(() => EventMemberCreateManyEventInput)
    data!: Array<EventMemberCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
