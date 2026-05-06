import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';

@InputType()
export class PomodoroTaskListRelationFilter {

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    every?: PomodoroTaskWhereInput;

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    some?: PomodoroTaskWhereInput;

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    none?: PomodoroTaskWhereInput;
}
