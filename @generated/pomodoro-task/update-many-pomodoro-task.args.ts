import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroTaskUpdateManyMutationInput } from './pomodoro-task-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';

@ArgsType()
export class UpdateManyPomodoroTaskArgs {

    @Field(() => PomodoroTaskUpdateManyMutationInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateManyMutationInput)
    data!: PomodoroTaskUpdateManyMutationInput;

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    where?: PomodoroTaskWhereInput;
}
