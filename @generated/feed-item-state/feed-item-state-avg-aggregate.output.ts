import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FeedItemStateAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    itemId?: number;

    @Field(() => Float, {nullable:true})
    skipCount?: number;

    @Field(() => Float, {nullable:true})
    actionCount?: number;
}
