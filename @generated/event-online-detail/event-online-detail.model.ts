import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Event } from '../event/event.model';
import { EventOnlineDetailCount } from './event-online-detail-count.output';

@ObjectType()
export class EventOnlineDetail {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => String, {nullable:true})
    joinCode!: string | null;

    @Field(() => String, {nullable:true})
    joinDetails!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Event], {nullable:true})
    event?: Array<Event>;

    @Field(() => EventOnlineDetailCount, {nullable:false})
    _count?: EventOnlineDetailCount;
}
