import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketGoalType } from '../prisma/bucket-goal-type.enum';
import { BucketGoalStatus } from '../prisma/bucket-goal-status.enum';

@ObjectType()
export class BucketGoalMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => BucketGoalType, {nullable:true})
    type?: keyof typeof BucketGoalType;

    @Field(() => BucketGoalStatus, {nullable:true})
    status?: keyof typeof BucketGoalStatus;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => String, {nullable:true})
    coverUrl?: string;

    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
