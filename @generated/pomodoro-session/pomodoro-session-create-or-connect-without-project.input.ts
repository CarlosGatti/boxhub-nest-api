import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateWithoutProjectInput } from './pomodoro-session-create-without-project.input';

@InputType()
export class PomodoroSessionCreateOrConnectWithoutProjectInput {

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroSessionWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => PomodoroSessionCreateWithoutProjectInput, {nullable:false})
    @Type(() => PomodoroSessionCreateWithoutProjectInput)
    create!: PomodoroSessionCreateWithoutProjectInput;
}
