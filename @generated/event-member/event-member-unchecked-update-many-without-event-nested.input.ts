import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberCreateWithoutEventInput } from './event-member-create-without-event.input';
import { Type } from 'class-transformer';
import { EventMemberCreateOrConnectWithoutEventInput } from './event-member-create-or-connect-without-event.input';
import { EventMemberUpsertWithWhereUniqueWithoutEventInput } from './event-member-upsert-with-where-unique-without-event.input';
import { EventMemberCreateManyEventInputEnvelope } from './event-member-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { EventMemberUpdateWithWhereUniqueWithoutEventInput } from './event-member-update-with-where-unique-without-event.input';
import { EventMemberUpdateManyWithWhereWithoutEventInput } from './event-member-update-many-with-where-without-event.input';
import { EventMemberScalarWhereInput } from './event-member-scalar-where.input';

@InputType()
export class EventMemberUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [EventMemberCreateWithoutEventInput], {nullable:true})
    @Type(() => EventMemberCreateWithoutEventInput)
    create?: Array<EventMemberCreateWithoutEventInput>;

    @Field(() => [EventMemberCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventMemberCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventMemberCreateOrConnectWithoutEventInput>;

    @Field(() => [EventMemberUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventMemberUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<EventMemberUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => EventMemberCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventMemberCreateManyEventInputEnvelope)
    createMany?: EventMemberCreateManyEventInputEnvelope;

    @Field(() => [EventMemberWhereUniqueInput], {nullable:true})
    @Type(() => EventMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>>;

    @Field(() => [EventMemberWhereUniqueInput], {nullable:true})
    @Type(() => EventMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>>;

    @Field(() => [EventMemberWhereUniqueInput], {nullable:true})
    @Type(() => EventMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>>;

    @Field(() => [EventMemberWhereUniqueInput], {nullable:true})
    @Type(() => EventMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>>;

    @Field(() => [EventMemberUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventMemberUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<EventMemberUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [EventMemberUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => EventMemberUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<EventMemberUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [EventMemberScalarWhereInput], {nullable:true})
    @Type(() => EventMemberScalarWhereInput)
    deleteMany?: Array<EventMemberScalarWhereInput>;
}
