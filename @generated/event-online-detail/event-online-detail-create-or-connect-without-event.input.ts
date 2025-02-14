import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventOnlineDetailWhereUniqueInput } from './event-online-detail-where-unique.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailCreateWithoutEventInput } from './event-online-detail-create-without-event.input';

@InputType()
export class EventOnlineDetailCreateOrConnectWithoutEventInput {

    @Field(() => EventOnlineDetailWhereUniqueInput, {nullable:false})
    @Type(() => EventOnlineDetailWhereUniqueInput)
    where!: Prisma.AtLeast<EventOnlineDetailWhereUniqueInput, 'id'>;

    @Field(() => EventOnlineDetailCreateWithoutEventInput, {nullable:false})
    @Type(() => EventOnlineDetailCreateWithoutEventInput)
    create!: EventOnlineDetailCreateWithoutEventInput;
}
