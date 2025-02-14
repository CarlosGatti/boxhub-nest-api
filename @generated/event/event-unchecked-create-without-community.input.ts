import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { EventMemberUncheckedCreateNestedManyWithoutEventInput } from '../event-member/event-member-unchecked-create-nested-many-without-event.input';
import { EventTicketUncheckedCreateNestedManyWithoutEventInput } from '../event-ticket/event-ticket-unchecked-create-nested-many-without-event.input';
import { PublicationUncheckedCreateNestedManyWithoutEventInput } from '../publication/publication-unchecked-create-nested-many-without-event.input';

@InputType()
export class EventUncheckedCreateWithoutCommunityInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    ownerId?: number;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => Int, {nullable:true})
    eventOnlineDetailId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    eventAddressId?: number;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => EventMemberUncheckedCreateNestedManyWithoutEventInput, {nullable:true})
    members?: EventMemberUncheckedCreateNestedManyWithoutEventInput;

    @Field(() => EventTicketUncheckedCreateNestedManyWithoutEventInput, {nullable:true})
    tickets?: EventTicketUncheckedCreateNestedManyWithoutEventInput;

    @Field(() => PublicationUncheckedCreateNestedManyWithoutEventInput, {nullable:true})
    publications?: PublicationUncheckedCreateNestedManyWithoutEventInput;
}
