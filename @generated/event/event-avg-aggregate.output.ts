import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EventAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    ownerId?: number;

    @Field(() => Float, {nullable:true})
    eventOnlineDetailId?: number;

    @Field(() => Float, {nullable:true})
    eventAddressId?: number;

    @Field(() => Float, {nullable:true})
    communityId?: number;
}
