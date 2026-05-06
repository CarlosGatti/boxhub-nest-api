import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroSessionMode } from '../prisma/pomodoro-session-mode.enum';
import { PomodoroSessionStatus } from '../prisma/pomodoro-session-status.enum';
import { User } from '../user/user.model';
import { PomodoroTask } from '../pomodoro-task/pomodoro-task.model';
import { DefinedProject } from '../defined-project/defined-project.model';

@ObjectType()
export class PomodoroSession {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    taskId!: number | null;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => PomodoroSessionMode, {nullable:false})
    mode!: keyof typeof PomodoroSessionMode;

    @Field(() => PomodoroSessionStatus, {nullable:false,defaultValue:'RUNNING'})
    status!: keyof typeof PomodoroSessionStatus;

    @Field(() => Int, {nullable:false})
    durationMinutes!: number;

    @Field(() => Date, {nullable:false})
    startedAt!: Date;

    @Field(() => Date, {nullable:true})
    pausedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    resumedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    completedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    cancelledAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => PomodoroTask, {nullable:true})
    task?: PomodoroTask | null;

    @Field(() => DefinedProject, {nullable:true})
    project?: DefinedProject | null;
}
