import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutMembersInput } from './event-update-without-members.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutMembersInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutMembersInput, {nullable:false})
    @Type(() => EventUpdateWithoutMembersInput)
    data!: EventUpdateWithoutMembersInput;
}
