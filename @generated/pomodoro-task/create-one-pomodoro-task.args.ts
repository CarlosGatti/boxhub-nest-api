import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroTaskCreateInput } from './pomodoro-task-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePomodoroTaskArgs {

    @Field(() => PomodoroTaskCreateInput, {nullable:false})
    @Type(() => PomodoroTaskCreateInput)
    data!: PomodoroTaskCreateInput;
}
