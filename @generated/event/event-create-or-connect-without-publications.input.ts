import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutPublicationsInput } from './event-create-without-publications.input';

@InputType()
export class EventCreateOrConnectWithoutPublicationsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutPublicationsInput, {nullable:false})
    @Type(() => EventCreateWithoutPublicationsInput)
    create!: EventCreateWithoutPublicationsInput;
}
