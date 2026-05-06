import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionScalarWhereInput } from './pomodoro-session-scalar-where.input';
import { Type } from 'class-transformer';
import { PomodoroSessionUpdateManyMutationInput } from './pomodoro-session-update-many-mutation.input';

@InputType()
export class PomodoroSessionUpdateManyWithWhereWithoutProjectInput {

    @Field(() => PomodoroSessionScalarWhereInput, {nullable:false})
    @Type(() => PomodoroSessionScalarWhereInput)
    where!: PomodoroSessionScalarWhereInput;

    @Field(() => PomodoroSessionUpdateManyMutationInput, {nullable:false})
    @Type(() => PomodoroSessionUpdateManyMutationInput)
    data!: PomodoroSessionUpdateManyMutationInput;
}
