import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FeedSourcePreferenceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Int, {nullable:false})
    notifyOnNew!: number;

    @Field(() => Int, {nullable:false})
    isMuted!: number;

    @Field(() => Int, {nullable:false})
    mutedUntil!: number;

    @Field(() => Int, {nullable:false})
    consecutiveSkips!: number;

    @Field(() => Int, {nullable:false})
    lastInteractedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
