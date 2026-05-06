import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateWithoutPomodoroSessionsInput } from './defined-project-update-without-pomodoro-sessions.input';

@InputType()
export class DefinedProjectUpdateToOneWithWhereWithoutPomodoroSessionsInput {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectUpdateWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutPomodoroSessionsInput)
    data!: DefinedProjectUpdateWithoutPomodoroSessionsInput;
}
