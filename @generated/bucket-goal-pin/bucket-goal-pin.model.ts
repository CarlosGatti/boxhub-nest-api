import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BucketPinSource } from '../prisma/bucket-pin-source.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoal } from '../bucket-goal/bucket-goal.model';

@ObjectType()
export class BucketGoalPin {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    goalId!: number;

    @Field(() => Float, {nullable:false})
    lat!: number;

    @Field(() => Float, {nullable:false})
    lng!: number;

    @Field(() => String, {nullable:true})
    label!: string | null;

    @Field(() => BucketPinSource, {nullable:false,defaultValue:'MANUAL'})
    source!: keyof typeof BucketPinSource;

    @Field(() => String, {nullable:true})
    placeId!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    raw!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => BucketGoal, {nullable:false})
    goal?: BucketGoal;
}
