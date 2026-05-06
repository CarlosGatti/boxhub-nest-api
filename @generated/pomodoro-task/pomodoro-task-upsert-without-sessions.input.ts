import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskUpdateWithoutSessionsInput } from './pomodoro-task-update-without-sessions.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateWithoutSessionsInput } from './pomodoro-task-create-without-sessions.input';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';

@InputType()
export class PomodoroTaskUpsertWithoutSessionsInput {

    @Field(() => PomodoroTaskUpdateWithoutSessionsInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateWithoutSessionsInput)
    update!: PomodoroTaskUpdateWithoutSessionsInput;

    @Field(() => PomodoroTaskCreateWithoutSessionsInput, {nullable:false})
    @Type(() => PomodoroTaskCreateWithoutSessionsInput)
    create!: PomodoroTaskCreateWithoutSessionsInput;

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    where?: PomodoroTaskWhereInput;
}
