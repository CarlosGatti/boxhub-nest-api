import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroSessionCreateInput } from './pomodoro-session-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePomodoroSessionArgs {

    @Field(() => PomodoroSessionCreateInput, {nullable:false})
    @Type(() => PomodoroSessionCreateInput)
    data!: PomodoroSessionCreateInput;
}
