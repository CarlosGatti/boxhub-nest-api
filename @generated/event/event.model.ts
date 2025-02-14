import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { Community } from '../community/community.model';
import { EventAddress } from '../event-address/event-address.model';
import { EventOnlineDetail } from '../event-online-detail/event-online-detail.model';
import { User } from '../user/user.model';
import { EventMember } from '../event-member/event-member.model';
import { EventTicket } from '../event-ticket/event-ticket.model';
import { Publication } from '../publication/publication.model';
import { EventCount } from './event-count.output';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    published!: boolean;

    @Field(() => Int, {nullable:true})
    ownerId!: number | null;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

    @Field(() => Int, {nullable:true})
    eventOnlineDetailId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    eventAddressId!: number | null;

    @Field(() => Visibility, {nullable:false,defaultValue:'PUBLIC'})
    visibility!: keyof typeof Visibility;

    @Field(() => String, {nullable:true})
    banner!: string | null;

    @Field(() => Int, {nullable:true})
    communityId!: number | null;

    @Field(() => Community, {nullable:true})
    Community?: Community | null;

    @Field(() => EventAddress, {nullable:true})
    address?: EventAddress | null;

    @Field(() => EventOnlineDetail, {nullable:true})
    onlineDetails?: EventOnlineDetail | null;

    @Field(() => User, {nullable:true})
    owner?: User | null;

    @Field(() => [EventMember], {nullable:true})
    members?: Array<EventMember>;

    @Field(() => [EventTicket], {nullable:true})
    tickets?: Array<EventTicket>;

    @Field(() => [Publication], {nullable:true})
    publications?: Array<Publication>;

    @Field(() => EventCount, {nullable:false})
    _count?: EventCount;
}
