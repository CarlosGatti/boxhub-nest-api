import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberCreateWithoutUserInput } from './event-member-create-without-user.input';
import { Type } from 'class-transformer';
import { EventMemberCreateOrConnectWithoutUserInput } from './event-member-create-or-connect-without-user.input';
import { EventMemberUpsertWithWhereUniqueWithoutUserInput } from './event-member-upsert-with-where-unique-without-user.input';
import { EventMemberCreateManyUserInputEnvelope } from './event-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { EventMemberUpdateWithWhereUniqueWithoutUserInput } from './event-member-update-with-where-unique-without-user.input';
import { EventMemberUpdateManyWithWhereWithoutUserInput } from './event-member-update-many-with-where-without-user.input';
import { EventMemberScalarWhereInput } from './event-member-scalar-where.input';

@InputType()
export class EventMemberUpdateManyWithoutUserNestedInput {

    @Field(() => [EventMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => EventMemberCreateWithoutUserInput)
    create?: Array<EventMemberCreateWithoutUserInput>;

    @Field(() => [EventMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventMemberCreateOrConnectWithoutUserInput>;

    @Field(() => [EventMemberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventMemberUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<EventMemberUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventMemberCreateManyUserInputEnvelope)
    createMany?: EventMemberCreateManyUserInputEnvelope;

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

    @Field(() => [EventMemberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventMemberUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<EventMemberUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventMemberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => EventMemberUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<EventMemberUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventMemberScalarWhereInput], {nullable:true})
    @Type(() => EventMemberScalarWhereInput)
    deleteMany?: Array<EventMemberScalarWhereInput>;
}
