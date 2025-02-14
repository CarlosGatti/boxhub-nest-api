import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventTicketMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    beeped?: true;

    @Field(() => Boolean, {nullable:true})
    expire?: true;

    @Field(() => Boolean, {nullable:true})
    userEmail?: true;

    @Field(() => Boolean, {nullable:true})
    eventId?: true;

    @Field(() => Boolean, {nullable:true})
    beepedTime?: true;

    @Field(() => Boolean, {nullable:true})
    valid?: true;
}
