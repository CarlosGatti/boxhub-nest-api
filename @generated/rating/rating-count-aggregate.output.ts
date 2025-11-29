import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RatingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    sellerId!: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;

    @Field(() => Int, {nullable:false})
    stars!: number;

    @Field(() => Int, {nullable:false})
    comment!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
