import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutPublicationsInput } from './event-create-without-publications.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutPublicationsInput } from './event-create-or-connect-without-publications.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutPublicationsInput {

    @Field(() => EventCreateWithoutPublicationsInput, {nullable:true})
    @Type(() => EventCreateWithoutPublicationsInput)
    create?: EventCreateWithoutPublicationsInput;

    @Field(() => EventCreateOrConnectWithoutPublicationsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutPublicationsInput)
    connectOrCreate?: EventCreateOrConnectWithoutPublicationsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
