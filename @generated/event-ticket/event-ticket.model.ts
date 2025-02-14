import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Event } from '../event/event.model';
import { User } from '../user/user.model';

@ObjectType()
export class EventTicket {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Boolean, {nullable:false})
    beeped!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date;

    @Field(() => String, {nullable:false})
    userEmail!: string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Date, {nullable:true})
    beepedTime!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    valid!: boolean;

    @Field(() => Event, {nullable:false})
    event?: Event;

    @Field(() => User, {nullable:false})
    user?: User;
}
