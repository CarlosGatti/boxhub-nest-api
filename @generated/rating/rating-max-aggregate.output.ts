import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RatingMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    sellerId?: number;

    @Field(() => Int, {nullable:true})
    buyerId?: number;

    @Field(() => Int, {nullable:true})
    stars?: number;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
