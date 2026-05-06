import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPomodoroTaskArgs {

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    where?: PomodoroTaskWhereInput;
}
