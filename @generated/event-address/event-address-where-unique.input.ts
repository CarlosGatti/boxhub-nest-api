import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventAddressWhereInput } from './event-address-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';

@InputType()
export class EventAddressWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EventAddressWhereInput], {nullable:true})
    AND?: Array<EventAddressWhereInput>;

    @Field(() => [EventAddressWhereInput], {nullable:true})
    OR?: Array<EventAddressWhereInput>;

    @Field(() => [EventAddressWhereInput], {nullable:true})
    NOT?: Array<EventAddressWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    zipCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    event?: EventListRelationFilter;
}
