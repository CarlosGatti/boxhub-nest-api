import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskStatus } from '../prisma/pomodoro-task-status.enum';
import { PomodoroSessionUncheckedCreateNestedManyWithoutTaskInput } from '../pomodoro-session/pomodoro-session-unchecked-create-nested-many-without-task.input';

@InputType()
export class PomodoroTaskUncheckedCreateWithoutProjectInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

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

    @Field(() => PomodoroSessionUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    sessions?: PomodoroSessionUncheckedCreateNestedManyWithoutTaskInput;
}
