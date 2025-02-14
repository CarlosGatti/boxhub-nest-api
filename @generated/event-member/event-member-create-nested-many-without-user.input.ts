import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberCreateWithoutUserInput } from './event-member-create-without-user.input';
import { Type } from 'class-transformer';
import { EventMemberCreateOrConnectWithoutUserInput } from './event-member-create-or-connect-without-user.input';
import { EventMemberCreateManyUserInputEnvelope } from './event-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';

@InputType()
export class EventMemberCreateNestedManyWithoutUserInput {

    @Field(() => [EventMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => EventMemberCreateWithoutUserInput)
    create?: Array<EventMemberCreateWithoutUserInput>;

    @Field(() => [EventMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventMemberCreateOrConnectWithoutUserInput>;

    @Field(() => EventMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventMemberCreateManyUserInputEnvelope)
    createMany?: EventMemberCreateManyUserInputEnvelope;

    @Field(() => [EventMemberWhereUniqueInput], {nullable:true})
    @Type(() => EventMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>>;
}
