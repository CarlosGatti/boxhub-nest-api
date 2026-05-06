import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroSessionUpdateManyMutationInput } from './pomodoro-session-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PomodoroSessionWhereInput } from './pomodoro-session-where.input';

@ArgsType()
export class UpdateManyPomodoroSessionArgs {

    @Field(() => PomodoroSessionUpdateManyMutationInput, {nullable:false})
    @Type(() => PomodoroSessionUpdateManyMutationInput)
    data!: PomodoroSessionUpdateManyMutationInput;

    @Field(() => PomodoroSessionWhereInput, {nullable:true})
    @Type(() => PomodoroSessionWhereInput)
    where?: PomodoroSessionWhereInput;
}
