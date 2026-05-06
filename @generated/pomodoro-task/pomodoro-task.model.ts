import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskStatus } from '../prisma/pomodoro-task-status.enum';
import { User } from '../user/user.model';
import { DefinedProject } from '../defined-project/defined-project.model';
import { PomodoroSession } from '../pomodoro-session/pomodoro-session.model';
import { PomodoroTaskCount } from './pomodoro-task-count.output';

@ObjectType()
export class PomodoroTask {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => PomodoroTaskStatus, {nullable:false,defaultValue:'TODO'})
    status!: keyof typeof PomodoroTaskStatus;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => DefinedProject, {nullable:true})
    project?: DefinedProject | null;

    @Field(() => [PomodoroSession], {nullable:true})
    sessions?: Array<PomodoroSession>;

    @Field(() => PomodoroTaskCount, {nullable:false})
    _count?: PomodoroTaskCount;
}
