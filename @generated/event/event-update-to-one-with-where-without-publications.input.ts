import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutPublicationsInput } from './event-update-without-publications.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutPublicationsInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutPublicationsInput, {nullable:false})
    @Type(() => EventUpdateWithoutPublicationsInput)
    data!: EventUpdateWithoutPublicationsInput;
}
