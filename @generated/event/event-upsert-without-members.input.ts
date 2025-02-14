import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutMembersInput } from './event-update-without-members.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutMembersInput } from './event-create-without-members.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutMembersInput {

    @Field(() => EventUpdateWithoutMembersInput, {nullable:false})
    @Type(() => EventUpdateWithoutMembersInput)
    update!: EventUpdateWithoutMembersInput;

    @Field(() => EventCreateWithoutMembersInput, {nullable:false})
    @Type(() => EventCreateWithoutMembersInput)
    create!: EventCreateWithoutMembersInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
