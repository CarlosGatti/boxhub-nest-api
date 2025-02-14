import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { Type } from 'class-transformer';
import { EventMemberCreateWithoutEventInput } from './event-member-create-without-event.input';

@InputType()
export class EventMemberCreateOrConnectWithoutEventInput {

    @Field(() => EventMemberWhereUniqueInput, {nullable:false})
    @Type(() => EventMemberWhereUniqueInput)
    where!: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;

    @Field(() => EventMemberCreateWithoutEventInput, {nullable:false})
    @Type(() => EventMemberCreateWithoutEventInput)
    create!: EventMemberCreateWithoutEventInput;
}
