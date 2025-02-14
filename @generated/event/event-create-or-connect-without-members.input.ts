import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutMembersInput } from './event-create-without-members.input';

@InputType()
export class EventCreateOrConnectWithoutMembersInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutMembersInput, {nullable:false})
    @Type(() => EventCreateWithoutMembersInput)
    create!: EventCreateWithoutMembersInput;
}
