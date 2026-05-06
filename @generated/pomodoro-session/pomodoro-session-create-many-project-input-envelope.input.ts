import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateManyProjectInput } from './pomodoro-session-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class PomodoroSessionCreateManyProjectInputEnvelope {

    @Field(() => [PomodoroSessionCreateManyProjectInput], {nullable:false})
    @Type(() => PomodoroSessionCreateManyProjectInput)
    data!: Array<PomodoroSessionCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
