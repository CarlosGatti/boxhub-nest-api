import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskStatus } from '../prisma/pomodoro-task-status.enum';

@ObjectType()
export class PomodoroTaskMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PomodoroTaskStatus, {nullable:true})
    status?: keyof typeof PomodoroTaskStatus;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
