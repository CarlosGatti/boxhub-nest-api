import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BucketGoalPinSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    goalId?: number;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lng?: number;
}
