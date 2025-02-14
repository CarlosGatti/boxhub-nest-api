import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    ownerId?: number;

    @Field(() => Int, {nullable:true})
    eventOnlineDetailId?: number;

    @Field(() => Int, {nullable:true})
    eventAddressId?: number;

    @Field(() => Int, {nullable:true})
    communityId?: number;
}
