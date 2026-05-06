import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectUpdateWithoutPomodoroTasksInput } from './defined-project-update-without-pomodoro-tasks.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutPomodoroTasksInput } from './defined-project-create-without-pomodoro-tasks.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectUpsertWithoutPomodoroTasksInput {

    @Field(() => DefinedProjectUpdateWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutPomodoroTasksInput)
    update!: DefinedProjectUpdateWithoutPomodoroTasksInput;

    @Field(() => DefinedProjectCreateWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutPomodoroTasksInput)
    create!: DefinedProjectCreateWithoutPomodoroTasksInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
