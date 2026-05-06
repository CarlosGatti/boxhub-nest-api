import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskCreateManyProjectInput } from './pomodoro-task-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class PomodoroTaskCreateManyProjectInputEnvelope {

    @Field(() => [PomodoroTaskCreateManyProjectInput], {nullable:false})
    @Type(() => PomodoroTaskCreateManyProjectInput)
    data!: Array<PomodoroTaskCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
