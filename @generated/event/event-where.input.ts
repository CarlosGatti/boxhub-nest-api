import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { CommunityNullableRelationFilter } from '../community/community-nullable-relation-filter.input';
import { EventAddressNullableRelationFilter } from '../event-address/event-address-nullable-relation-filter.input';
import { EventOnlineDetailNullableRelationFilter } from '../event-online-detail/event-online-detail-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { EventMemberListRelationFilter } from '../event-member/event-member-list-relation-filter.input';
import { EventTicketListRelationFilter } from '../event-ticket/event-ticket-list-relation-filter.input';
import { PublicationListRelationFilter } from '../publication/publication-list-relation-filter.input';

@InputType()
export class EventWhereInput {

    @Field(() => [EventWhereInput], {nullable:true})
    AND?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    OR?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    NOT?: Array<EventWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    ownerId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventOnlineDetailId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventAddressId?: IntNullableFilter;

    @Field(() => EnumVisibilityFilter, {nullable:true})
    visibility?: EnumVisibilityFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    banner?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    communityId?: IntNullableFilter;

    @Field(() => CommunityNullableRelationFilter, {nullable:true})
    Community?: CommunityNullableRelationFilter;

    @Field(() => EventAddressNullableRelationFilter, {nullable:true})
    address?: EventAddressNullableRelationFilter;

    @Field(() => EventOnlineDetailNullableRelationFilter, {nullable:true})
    onlineDetails?: EventOnlineDetailNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    owner?: UserNullableRelationFilter;

    @Field(() => EventMemberListRelationFilter, {nullable:true})
    members?: EventMemberListRelationFilter;

    @Field(() => EventTicketListRelationFilter, {nullable:true})
    tickets?: EventTicketListRelationFilter;

    @Field(() => PublicationListRelationFilter, {nullable:true})
    publications?: PublicationListRelationFilter;
}
