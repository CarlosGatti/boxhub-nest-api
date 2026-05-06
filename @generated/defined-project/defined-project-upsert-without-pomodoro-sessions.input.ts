import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectUpdateWithoutPomodoroSessionsInput } from './defined-project-update-without-pomodoro-sessions.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutPomodoroSessionsInput } from './defined-project-create-without-pomodoro-sessions.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectUpsertWithoutPomodoroSessionsInput {

    @Field(() => DefinedProjectUpdateWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutPomodoroSessionsInput)
    update!: DefinedProjectUpdateWithoutPomodoroSessionsInput;

    @Field(() => DefinedProjectCreateWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutPomodoroSessionsInput)
    create!: DefinedProjectCreateWithoutPomodoroSessionsInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
