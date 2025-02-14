import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventTicketCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    beeped!: number;

    @Field(() => Int, {nullable:false})
    expire!: number;

    @Field(() => Int, {nullable:false})
    userEmail!: number;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:false})
    beepedTime!: number;

    @Field(() => Int, {nullable:false})
    valid!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
