import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroSessionWhereInput } from './pomodoro-session-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPomodoroSessionArgs {

    @Field(() => PomodoroSessionWhereInput, {nullable:true})
    @Type(() => PomodoroSessionWhereInput)
    where?: PomodoroSessionWhereInput;
}
