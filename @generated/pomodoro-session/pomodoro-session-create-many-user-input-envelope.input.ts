import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateManyUserInput } from './pomodoro-session-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PomodoroSessionCreateManyUserInputEnvelope {

    @Field(() => [PomodoroSessionCreateManyUserInput], {nullable:false})
    @Type(() => PomodoroSessionCreateManyUserInput)
    data!: Array<PomodoroSessionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
