import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';

@InputType()
export class EventOnlineDetailWhereInput {

    @Field(() => [EventOnlineDetailWhereInput], {nullable:true})
    AND?: Array<EventOnlineDetailWhereInput>;

    @Field(() => [EventOnlineDetailWhereInput], {nullable:true})
    OR?: Array<EventOnlineDetailWhereInput>;

    @Field(() => [EventOnlineDetailWhereInput], {nullable:true})
    NOT?: Array<EventOnlineDetailWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    platform?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    link?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    joinCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    joinDetails?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    event?: EventListRelationFilter;
}
