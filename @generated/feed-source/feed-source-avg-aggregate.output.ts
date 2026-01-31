import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FeedSourceAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    collectionId?: number;

    @Field(() => Float, {nullable:true})
    fetchEveryMin?: number;

    @Field(() => Float, {nullable:true})
    failureCount?: number;
}
