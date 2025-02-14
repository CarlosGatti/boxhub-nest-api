import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class EventTicketWhereInput {

    @Field(() => [EventTicketWhereInput], {nullable:true})
    AND?: Array<EventTicketWhereInput>;

    @Field(() => [EventTicketWhereInput], {nullable:true})
    OR?: Array<EventTicketWhereInput>;

    @Field(() => [EventTicketWhereInput], {nullable:true})
    NOT?: Array<EventTicketWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    beeped?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expire?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userEmail?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    eventId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    beepedTime?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    valid?: BoolFilter;

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
