import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { Type } from 'class-transformer';
import { EventMemberCreateWithoutUserInput } from './event-member-create-without-user.input';

@InputType()
export class EventMemberCreateOrConnectWithoutUserInput {

    @Field(() => EventMemberWhereUniqueInput, {nullable:false})
    @Type(() => EventMemberWhereUniqueInput)
    where!: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;

    @Field(() => EventMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => EventMemberCreateWithoutUserInput)
    create!: EventMemberCreateWithoutUserInput;
}
