import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BucketPinSource } from '../prisma/bucket-pin-source.enum';

@ObjectType()
export class BucketGoalPinMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    goalId?: number;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lng?: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => BucketPinSource, {nullable:true})
    source?: keyof typeof BucketPinSource;

    @Field(() => String, {nullable:true})
    placeId?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
