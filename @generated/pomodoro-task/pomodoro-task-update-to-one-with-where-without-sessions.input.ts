import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';
import { Type } from 'class-transformer';
import { PomodoroTaskUpdateWithoutSessionsInput } from './pomodoro-task-update-without-sessions.input';

@InputType()
export class PomodoroTaskUpdateToOneWithWhereWithoutSessionsInput {

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    where?: PomodoroTaskWhereInput;

    @Field(() => PomodoroTaskUpdateWithoutSessionsInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateWithoutSessionsInput)
    data!: PomodoroTaskUpdateWithoutSessionsInput;
}
