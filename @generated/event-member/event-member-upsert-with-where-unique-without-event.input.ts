import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { Type } from 'class-transformer';
import { EventMemberUpdateWithoutEventInput } from './event-member-update-without-event.input';
import { EventMemberCreateWithoutEventInput } from './event-member-create-without-event.input';

@InputType()
export class EventMemberUpsertWithWhereUniqueWithoutEventInput {

    @Field(() => EventMemberWhereUniqueInput, {nullable:false})
    @Type(() => EventMemberWhereUniqueInput)
    where!: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;

    @Field(() => EventMemberUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventMemberUpdateWithoutEventInput)
    update!: EventMemberUpdateWithoutEventInput;

    @Field(() => EventMemberCreateWithoutEventInput, {nullable:false})
    @Type(() => EventMemberCreateWithoutEventInput)
    create!: EventMemberCreateWithoutEventInput;
}
