import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventOnlineDetailMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    platform?: true;

    @Field(() => Boolean, {nullable:true})
    link?: true;

    @Field(() => Boolean, {nullable:true})
    joinCode?: true;

    @Field(() => Boolean, {nullable:true})
    joinDetails?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
