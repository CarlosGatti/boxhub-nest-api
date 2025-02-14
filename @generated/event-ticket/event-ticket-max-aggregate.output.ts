import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventTicketMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:true})
    beeped?: boolean;

    @Field(() => Date, {nullable:true})
    expire?: Date | string;

    @Field(() => String, {nullable:true})
    userEmail?: string;

    @Field(() => Int, {nullable:true})
    eventId?: number;

    @Field(() => Date, {nullable:true})
    beepedTime?: Date | string;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;
}
