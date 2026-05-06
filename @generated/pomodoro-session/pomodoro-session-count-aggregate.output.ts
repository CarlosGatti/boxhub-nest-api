import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PomodoroSessionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    mode!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    durationMinutes!: number;

    @Field(() => Int, {nullable:false})
    startedAt!: number;

    @Field(() => Int, {nullable:false})
    pausedAt!: number;

    @Field(() => Int, {nullable:false})
    resumedAt!: number;

    @Field(() => Int, {nullable:false})
    completedAt!: number;

    @Field(() => Int, {nullable:false})
    cancelledAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
