import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RatingCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    sellerId?: true;

    @Field(() => Boolean, {nullable:true})
    buyerId?: true;

    @Field(() => Boolean, {nullable:true})
    stars?: true;

    @Field(() => Boolean, {nullable:true})
    comment?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
