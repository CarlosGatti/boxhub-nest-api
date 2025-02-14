import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberCreateWithoutEventInput } from './event-member-create-without-event.input';
import { Type } from 'class-transformer';
import { EventMemberCreateOrConnectWithoutEventInput } from './event-member-create-or-connect-without-event.input';
import { EventMemberCreateManyEventInputEnvelope } from './event-member-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';

@InputType()
export class EventMemberUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [EventMemberCreateWithoutEventInput], {nullable:true})
    @Type(() => EventMemberCreateWithoutEventInput)
    create?: Array<EventMemberCreateWithoutEventInput>;

    @Field(() => [EventMemberCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventMemberCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventMemberCreateOrConnectWithoutEventInput>;

    @Field(() => EventMemberCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventMemberCreateManyEventInputEnvelope)
    createMany?: EventMemberCreateManyEventInputEnvelope;

    @Field(() => [EventMemberWhereUniqueInput], {nullable:true})
    @Type(() => EventMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>>;
}
