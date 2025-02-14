import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventMemberWhereUniqueInput } from './event-member-where-unique.input';
import { Type } from 'class-transformer';
import { EventMemberUpdateWithoutUserInput } from './event-member-update-without-user.input';

@InputType()
export class EventMemberUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventMemberWhereUniqueInput, {nullable:false})
    @Type(() => EventMemberWhereUniqueInput)
    where!: Prisma.AtLeast<EventMemberWhereUniqueInput, 'id'>;

    @Field(() => EventMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => EventMemberUpdateWithoutUserInput)
    data!: EventMemberUpdateWithoutUserInput;
}
