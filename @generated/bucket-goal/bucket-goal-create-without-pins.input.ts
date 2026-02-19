import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalType } from '../prisma/bucket-goal-type.enum';
import { BucketGoalStatus } from '../prisma/bucket-goal-status.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalCreatetagsInput } from './bucket-goal-createtags.input';
import { UserCreateNestedOneWithoutBucketGoalsInput } from '../user/user-create-nested-one-without-bucket-goals.input';
import { Type } from 'class-transformer';
import { BucketGoalLogCreateNestedManyWithoutGoalInput } from '../bucket-goal-log/bucket-goal-log-create-nested-many-without-goal.input';
import { BucketGoalMediaCreateNestedManyWithoutGoalInput } from '../bucket-goal-media/bucket-goal-media-create-nested-many-without-goal.input';
import { BucketVisionGoalLinkCreateNestedManyWithoutGoalInput } from '../bucket-vision-goal-link/bucket-vision-goal-link-create-nested-many-without-goal.input';

@InputType()
export class BucketGoalCreateWithoutPinsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => BucketGoalType, {nullable:true})
    type?: keyof typeof BucketGoalType;

    @Field(() => BucketGoalStatus, {nullable:true})
    status?: keyof typeof BucketGoalStatus;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    details?: any;

    @Field(() => Int, {nullable:true})
    detailsSchemaVersion?: number;

    @Field(() => String, {nullable:true})
    coverUrl?: string;

    @Field(() => BucketGoalCreatetagsInput, {nullable:true})
    tags?: BucketGoalCreatetagsInput;

    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBucketGoalsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutBucketGoalsInput)
    user!: UserCreateNestedOneWithoutBucketGoalsInput;

    @Field(() => BucketGoalLogCreateNestedManyWithoutGoalInput, {nullable:true})
    logs?: BucketGoalLogCreateNestedManyWithoutGoalInput;

    @Field(() => BucketGoalMediaCreateNestedManyWithoutGoalInput, {nullable:true})
    media?: BucketGoalMediaCreateNestedManyWithoutGoalInput;

    @Field(() => BucketVisionGoalLinkCreateNestedManyWithoutGoalInput, {nullable:true})
    bucketVisionGoalLinks?: BucketVisionGoalLinkCreateNestedManyWithoutGoalInput;
}
