import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FeedSourceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    collectionId!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    url!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    includeShorts!: number;

    @Field(() => Int, {nullable:false})
    fetchEveryMin!: number;

    @Field(() => Int, {nullable:false})
    lastFetchedAt!: number;

    @Field(() => Int, {nullable:false})
    failureCount!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
