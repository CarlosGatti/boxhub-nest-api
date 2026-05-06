import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroSessionUpdateInput } from './pomodoro-session-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';

@ArgsType()
export class UpdateOnePomodoroSessionArgs {

    @Field(() => PomodoroSessionUpdateInput, {nullable:false})
    @Type(() => PomodoroSessionUpdateInput)
    data!: PomodoroSessionUpdateInput;

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroSessionWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;
}
