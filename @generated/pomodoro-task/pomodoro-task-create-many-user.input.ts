import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskStatus } from '../prisma/pomodoro-task-status.enum';

@InputType()
export class PomodoroTaskCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

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
