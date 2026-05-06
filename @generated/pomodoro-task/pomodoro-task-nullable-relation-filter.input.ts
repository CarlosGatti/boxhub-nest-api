import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';

@InputType()
export class PomodoroTaskNullableRelationFilter {

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    is?: PomodoroTaskWhereInput;

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    isNot?: PomodoroTaskWhereInput;
}
