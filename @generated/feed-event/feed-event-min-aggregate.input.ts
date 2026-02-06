import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeedEventMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    itemId?: true;

    @Field(() => Boolean, {nullable:true})
    sourceId?: true;

    @Field(() => Boolean, {nullable:true})
    action?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
