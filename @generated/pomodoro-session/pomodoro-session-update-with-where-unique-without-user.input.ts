import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroSessionUpdateWithoutUserInput } from './pomodoro-session-update-without-user.input';

@InputType()
export class PomodoroSessionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroSessionWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => PomodoroSessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => PomodoroSessionUpdateWithoutUserInput)
    data!: PomodoroSessionUpdateWithoutUserInput;
}
