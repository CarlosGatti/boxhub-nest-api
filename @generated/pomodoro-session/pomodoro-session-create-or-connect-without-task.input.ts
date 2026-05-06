import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateWithoutTaskInput } from './pomodoro-session-create-without-task.input';

@InputType()
export class PomodoroSessionCreateOrConnectWithoutTaskInput {

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroSessionWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => PomodoroSessionCreateWithoutTaskInput, {nullable:false})
    @Type(() => PomodoroSessionCreateWithoutTaskInput)
    create!: PomodoroSessionCreateWithoutTaskInput;
}
