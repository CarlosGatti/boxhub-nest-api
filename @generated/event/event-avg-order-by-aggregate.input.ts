import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EventAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventOnlineDetailId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventAddressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    communityId?: keyof typeof SortOrder;
}
