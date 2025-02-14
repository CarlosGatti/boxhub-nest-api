import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    ownerId?: true;

    @Field(() => Boolean, {nullable:true})
    eventOnlineDetailId?: true;

    @Field(() => Boolean, {nullable:true})
    eventAddressId?: true;

    @Field(() => Boolean, {nullable:true})
    communityId?: true;
}
