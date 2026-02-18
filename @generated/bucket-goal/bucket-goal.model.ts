import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketGoalType } from '../prisma/bucket-goal-type.enum';
import { BucketGoalStatus } from '../prisma/bucket-goal-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { BucketGoalLog } from '../bucket-goal-log/bucket-goal-log.model';
import { BucketGoalPin } from '../bucket-goal-pin/bucket-goal-pin.model';
import { BucketGoalMedia } from '../bucket-goal-media/bucket-goal-media.model';
import { BucketGoalCount } from './bucket-goal-count.output';

@ObjectType()
export class BucketGoal {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => BucketGoalType, {nullable:false,defaultValue:'GENERAL'})
    type!: keyof typeof BucketGoalType;

    @Field(() => BucketGoalStatus, {nullable:false,defaultValue:'IDEA'})
    status!: keyof typeof BucketGoalStatus;

    @Field(() => Int, {nullable:false,defaultValue:0})
    priority!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    details!: any | null;

    @Field(() => String, {nullable:true})
    coverUrl!: string | null;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => Date, {nullable:true})
    targetDate!: Date | null;

    @Field(() => Date, {nullable:true})
    completedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [BucketGoalLog], {nullable:true})
    logs?: Array<BucketGoalLog>;

    @Field(() => [BucketGoalPin], {nullable:true})
    pins?: Array<BucketGoalPin>;

    @Field(() => [BucketGoalMedia], {nullable:true})
    media?: Array<BucketGoalMedia>;

    @Field(() => BucketGoalCount, {nullable:false})
    _count?: BucketGoalCount;
}
