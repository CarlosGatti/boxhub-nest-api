import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class EventTicketScalarWhereInput {

    @Field(() => [EventTicketScalarWhereInput], {nullable:true})
    AND?: Array<EventTicketScalarWhereInput>;

    @Field(() => [EventTicketScalarWhereInput], {nullable:true})
    OR?: Array<EventTicketScalarWhereInput>;

    @Field(() => [EventTicketScalarWhereInput], {nullable:true})
    NOT?: Array<EventTicketScalarWhereInput>;

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
}
