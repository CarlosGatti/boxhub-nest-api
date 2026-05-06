import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroSessionUpdateWithoutProjectInput } from './pomodoro-session-update-without-project.input';

@InputType()
export class PomodoroSessionUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroSessionWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => PomodoroSessionUpdateWithoutProjectInput, {nullable:false})
    @Type(() => PomodoroSessionUpdateWithoutProjectInput)
    data!: PomodoroSessionUpdateWithoutProjectInput;
}
