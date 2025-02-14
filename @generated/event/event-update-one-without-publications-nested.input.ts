import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutPublicationsInput } from './event-create-without-publications.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutPublicationsInput } from './event-create-or-connect-without-publications.input';
import { EventUpsertWithoutPublicationsInput } from './event-upsert-without-publications.input';
import { EventWhereInput } from './event-where.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutPublicationsInput } from './event-update-to-one-with-where-without-publications.input';

@InputType()
export class EventUpdateOneWithoutPublicationsNestedInput {

    @Field(() => EventCreateWithoutPublicationsInput, {nullable:true})
    @Type(() => EventCreateWithoutPublicationsInput)
    create?: EventCreateWithoutPublicationsInput;

    @Field(() => EventCreateOrConnectWithoutPublicationsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutPublicationsInput)
    connectOrCreate?: EventCreateOrConnectWithoutPublicationsInput;

    @Field(() => EventUpsertWithoutPublicationsInput, {nullable:true})
    @Type(() => EventUpsertWithoutPublicationsInput)
    upsert?: EventUpsertWithoutPublicationsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    disconnect?: EventWhereInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    delete?: EventWhereInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutPublicationsInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutPublicationsInput)
    update?: EventUpdateToOneWithWhereWithoutPublicationsInput;
}
