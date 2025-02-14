import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { CommunityCreateNestedOneWithoutEventsInput } from '../community/community-create-nested-one-without-events.input';
import { EventAddressCreateNestedOneWithoutEventInput } from '../event-address/event-address-create-nested-one-without-event.input';
import { EventOnlineDetailCreateNestedOneWithoutEventInput } from '../event-online-detail/event-online-detail-create-nested-one-without-event.input';
import { UserCreateNestedOneWithoutEventsInput } from '../user/user-create-nested-one-without-events.input';
import { EventMemberCreateNestedManyWithoutEventInput } from '../event-member/event-member-create-nested-many-without-event.input';
import { EventTicketCreateNestedManyWithoutEventInput } from '../event-ticket/event-ticket-create-nested-many-without-event.input';

@InputType()
export class EventCreateWithoutPublicationsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => CommunityCreateNestedOneWithoutEventsInput, {nullable:true})
    Community?: CommunityCreateNestedOneWithoutEventsInput;

    @Field(() => EventAddressCreateNestedOneWithoutEventInput, {nullable:true})
    address?: EventAddressCreateNestedOneWithoutEventInput;

    @Field(() => EventOnlineDetailCreateNestedOneWithoutEventInput, {nullable:true})
    onlineDetails?: EventOnlineDetailCreateNestedOneWithoutEventInput;

    @Field(() => UserCreateNestedOneWithoutEventsInput, {nullable:true})
    owner?: UserCreateNestedOneWithoutEventsInput;

    @Field(() => EventMemberCreateNestedManyWithoutEventInput, {nullable:true})
    members?: EventMemberCreateNestedManyWithoutEventInput;

    @Field(() => EventTicketCreateNestedManyWithoutEventInput, {nullable:true})
    tickets?: EventTicketCreateNestedManyWithoutEventInput;
}
