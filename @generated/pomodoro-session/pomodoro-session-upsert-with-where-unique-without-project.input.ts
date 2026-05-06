import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroSessionUpdateWithoutProjectInput } from './pomodoro-session-update-without-project.input';
import { PomodoroSessionCreateWithoutProjectInput } from './pomodoro-session-create-without-project.input';

@InputType()
export class PomodoroSessionUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroSessionWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => PomodoroSessionUpdateWithoutProjectInput, {nullable:false})
    @Type(() => PomodoroSessionUpdateWithoutProjectInput)
    update!: PomodoroSessionUpdateWithoutProjectInput;

    @Field(() => PomodoroSessionCreateWithoutProjectInput, {nullable:false})
    @Type(() => PomodoroSessionCreateWithoutProjectInput)
    create!: PomodoroSessionCreateWithoutProjectInput;
}
