import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroTaskUpdateWithoutUserInput } from './pomodoro-task-update-without-user.input';

@InputType()
export class PomodoroTaskUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => PomodoroTaskUpdateWithoutUserInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateWithoutUserInput)
    data!: PomodoroTaskUpdateWithoutUserInput;
}
