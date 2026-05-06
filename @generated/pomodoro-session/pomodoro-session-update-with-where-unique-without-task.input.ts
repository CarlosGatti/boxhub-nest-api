import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroSessionUpdateWithoutTaskInput } from './pomodoro-session-update-without-task.input';

@InputType()
export class PomodoroSessionUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroSessionWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => PomodoroSessionUpdateWithoutTaskInput, {nullable:false})
    @Type(() => PomodoroSessionUpdateWithoutTaskInput)
    data!: PomodoroSessionUpdateWithoutTaskInput;
}
