import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BucketGoalPinCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    goalId!: number;

    @Field(() => Int, {nullable:false})
    lat!: number;

    @Field(() => Int, {nullable:false})
    lng!: number;

    @Field(() => Int, {nullable:false})
    label!: number;

    @Field(() => Int, {nullable:false})
    source!: number;

    @Field(() => Int, {nullable:false})
    placeId!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    raw!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
