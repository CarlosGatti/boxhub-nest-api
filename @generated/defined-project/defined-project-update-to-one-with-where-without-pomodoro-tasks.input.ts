import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateWithoutPomodoroTasksInput } from './defined-project-update-without-pomodoro-tasks.input';

@InputType()
export class DefinedProjectUpdateToOneWithWhereWithoutPomodoroTasksInput {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectUpdateWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutPomodoroTasksInput)
    data!: DefinedProjectUpdateWithoutPomodoroTasksInput;
}
