import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskCreateManyUserInput } from './pomodoro-task-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PomodoroTaskCreateManyUserInputEnvelope {

    @Field(() => [PomodoroTaskCreateManyUserInput], {nullable:false})
    @Type(() => PomodoroTaskCreateManyUserInput)
    data!: Array<PomodoroTaskCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
