import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberCreateManyUserInput } from './event-member-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class EventMemberCreateManyUserInputEnvelope {

    @Field(() => [EventMemberCreateManyUserInput], {nullable:false})
    @Type(() => EventMemberCreateManyUserInput)
    data!: Array<EventMemberCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
