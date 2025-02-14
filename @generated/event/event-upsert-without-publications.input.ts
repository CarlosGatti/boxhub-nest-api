import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutPublicationsInput } from './event-update-without-publications.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutPublicationsInput } from './event-create-without-publications.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutPublicationsInput {

    @Field(() => EventUpdateWithoutPublicationsInput, {nullable:false})
    @Type(() => EventUpdateWithoutPublicationsInput)
    update!: EventUpdateWithoutPublicationsInput;

    @Field(() => EventCreateWithoutPublicationsInput, {nullable:false})
    @Type(() => EventCreateWithoutPublicationsInput)
    create!: EventCreateWithoutPublicationsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
