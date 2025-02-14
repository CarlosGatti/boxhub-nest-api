import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunityOrderByWithRelationInput } from '../community/community-order-by-with-relation.input';
import { EventAddressOrderByWithRelationInput } from '../event-address/event-address-order-by-with-relation.input';
import { EventOnlineDetailOrderByWithRelationInput } from '../event-online-detail/event-online-detail-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { EventMemberOrderByRelationAggregateInput } from '../event-member/event-member-order-by-relation-aggregate.input';
import { EventTicketOrderByRelationAggregateInput } from '../event-ticket/event-ticket-order-by-relation-aggregate.input';
import { PublicationOrderByRelationAggregateInput } from '../publication/publication-order-by-relation-aggregate.input';

@InputType()
export class EventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ownerId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    eventOnlineDetailId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    eventAddressId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    banner?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    communityId?: SortOrderInput;

    @Field(() => CommunityOrderByWithRelationInput, {nullable:true})
    Community?: CommunityOrderByWithRelationInput;

    @Field(() => EventAddressOrderByWithRelationInput, {nullable:true})
    address?: EventAddressOrderByWithRelationInput;

    @Field(() => EventOnlineDetailOrderByWithRelationInput, {nullable:true})
    onlineDetails?: EventOnlineDetailOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    owner?: UserOrderByWithRelationInput;

    @Field(() => EventMemberOrderByRelationAggregateInput, {nullable:true})
    members?: EventMemberOrderByRelationAggregateInput;

    @Field(() => EventTicketOrderByRelationAggregateInput, {nullable:true})
    tickets?: EventTicketOrderByRelationAggregateInput;

    @Field(() => PublicationOrderByRelationAggregateInput, {nullable:true})
    publications?: PublicationOrderByRelationAggregateInput;
}
