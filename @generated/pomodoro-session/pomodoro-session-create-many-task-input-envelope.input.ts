import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateManyTaskInput } from './pomodoro-session-create-many-task.input';
import { Type } from 'class-transformer';

@InputType()
export class PomodoroSessionCreateManyTaskInputEnvelope {

    @Field(() => [PomodoroSessionCreateManyTaskInput], {nullable:false})
    @Type(() => PomodoroSessionCreateManyTaskInput)
    data!: Array<PomodoroSessionCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
