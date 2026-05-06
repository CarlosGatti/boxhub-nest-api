import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionWhereInput } from './pomodoro-session-where.input';

@InputType()
export class PomodoroSessionListRelationFilter {

    @Field(() => PomodoroSessionWhereInput, {nullable:true})
    every?: PomodoroSessionWhereInput;

    @Field(() => PomodoroSessionWhereInput, {nullable:true})
    some?: PomodoroSessionWhereInput;

    @Field(() => PomodoroSessionWhereInput, {nullable:true})
    none?: PomodoroSessionWhereInput;
}
