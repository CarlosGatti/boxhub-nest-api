import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskScalarWhereInput } from './pomodoro-task-scalar-where.input';
import { Type } from 'class-transformer';
import { PomodoroTaskUpdateManyMutationInput } from './pomodoro-task-update-many-mutation.input';

@InputType()
export class PomodoroTaskUpdateManyWithWhereWithoutUserInput {

    @Field(() => PomodoroTaskScalarWhereInput, {nullable:false})
    @Type(() => PomodoroTaskScalarWhereInput)
    where!: PomodoroTaskScalarWhereInput;

    @Field(() => PomodoroTaskUpdateManyMutationInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateManyMutationInput)
    data!: PomodoroTaskUpdateManyMutationInput;
}
