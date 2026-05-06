import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskStatus } from '../prisma/pomodoro-task-status.enum';
import { UserCreateNestedOneWithoutPomodoroTasksInput } from '../user/user-create-nested-one-without-pomodoro-tasks.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateNestedOneWithoutPomodoroTasksInput } from '../defined-project/defined-project-create-nested-one-without-pomodoro-tasks.input';

@InputType()
export class PomodoroTaskCreateWithoutSessionsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PomodoroTaskStatus, {nullable:true})
    status?: keyof typeof PomodoroTaskStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutPomodoroTasksInput)
    user!: UserCreateNestedOneWithoutPomodoroTasksInput;

    @Field(() => DefinedProjectCreateNestedOneWithoutPomodoroTasksInput, {nullable:true})
    project?: DefinedProjectCreateNestedOneWithoutPomodoroTasksInput;
}
