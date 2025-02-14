import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventOnlineDetailCreateWithoutEventInput } from './event-online-detail-create-without-event.input';
import { Type } from 'class-transformer';
import { EventOnlineDetailCreateOrConnectWithoutEventInput } from './event-online-detail-create-or-connect-without-event.input';
import { EventOnlineDetailUpsertWithoutEventInput } from './event-online-detail-upsert-without-event.input';
import { EventOnlineDetailWhereInput } from './event-online-detail-where.input';
import { Prisma } from '@prisma/client';
import { EventOnlineDetailWhereUniqueInput } from './event-online-detail-where-unique.input';
import { EventOnlineDetailUpdateToOneWithWhereWithoutEventInput } from './event-online-detail-update-to-one-with-where-without-event.input';

@InputType()
export class EventOnlineDetailUpdateOneWithoutEventNestedInput {

    @Field(() => EventOnlineDetailCreateWithoutEventInput, {nullable:true})
    @Type(() => EventOnlineDetailCreateWithoutEventInput)
    create?: EventOnlineDetailCreateWithoutEventInput;

    @Field(() => EventOnlineDetailCreateOrConnectWithoutEventInput, {nullable:true})
    @Type(() => EventOnlineDetailCreateOrConnectWithoutEventInput)
    connectOrCreate?: EventOnlineDetailCreateOrConnectWithoutEventInput;

    @Field(() => EventOnlineDetailUpsertWithoutEventInput, {nullable:true})
    @Type(() => EventOnlineDetailUpsertWithoutEventInput)
    upsert?: EventOnlineDetailUpsertWithoutEventInput;

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereInput)
    disconnect?: EventOnlineDetailWhereInput;

    @Field(() => EventOnlineDetailWhereInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereInput)
    delete?: EventOnlineDetailWhereInput;

    @Field(() => EventOnlineDetailWhereUniqueInput, {nullable:true})
    @Type(() => EventOnlineDetailWhereUniqueInput)
    connect?: Prisma.AtLeast<EventOnlineDetailWhereUniqueInput, 'id'>;

    @Field(() => EventOnlineDetailUpdateToOneWithWhereWithoutEventInput, {nullable:true})
    @Type(() => EventOnlineDetailUpdateToOneWithWhereWithoutEventInput)
    update?: EventOnlineDetailUpdateToOneWithWhereWithoutEventInput;
}
