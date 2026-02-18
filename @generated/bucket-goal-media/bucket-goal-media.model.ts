import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketMediaType } from '../prisma/bucket-media-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoal } from '../bucket-goal/bucket-goal.model';
import { BucketGoalLog } from '../bucket-goal-log/bucket-goal-log.model';

@ObjectType()
export class BucketGoalMedia {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    goalId!: number | null;

    @Field(() => Int, {nullable:true})
    logId!: number | null;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => BucketMediaType, {nullable:false,defaultValue:'IMAGE'})
    type!: keyof typeof BucketMediaType;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => BucketGoal, {nullable:true})
    goal?: BucketGoal | null;

    @Field(() => BucketGoalLog, {nullable:true})
    log?: BucketGoalLog | null;
}
