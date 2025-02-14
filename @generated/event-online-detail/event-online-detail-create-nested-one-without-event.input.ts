import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOnlineDetailCreateWithoutEventInput } from './event-online-detail-create-without-event.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailCreateOrConnectWithoutEventInput } from './event-online-detail-create-or-connect-without-event.input';
import { Prisma } from '@prisma/client';
import { EventOnlineDetailWhereUniqueInput } from './event-online-detail-where-unique.input';

@InputType()
export class EventOnlineDetailCreateNestedOneWithoutEventInput {

    @Field(() => EventOnlineDetailCreateWithoutEventInput, {nullable:true})
    @Type(() => EventOnlineDetailCreateWithoutEventInput)
    create?: EventOnlineDetailCreateWithoutEventInput;

    @Field(() => EventOnlineDetailCreateOrConnectWithoutEventInput, {nullable:true})
    @Type(() => EventOnlineDetailCreateOrConnectWithoutEventInput)
    connectOrCreate?: EventOnlineDetailCreateOrConnectWithoutEventInput;

    @Field(() => EventOnlineDetailWhereUniqueInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereUniqueInput)
    connect?: Prisma.AtLeast<EventOnlineDetailWhereUniqueInput, 'id'>;
}
