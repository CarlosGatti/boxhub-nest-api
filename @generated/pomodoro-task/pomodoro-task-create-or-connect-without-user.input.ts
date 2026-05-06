import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateWithoutUserInput } from './pomodoro-task-create-without-user.input';

@InputType()
export class PomodoroTaskCreateOrConnectWithoutUserInput {

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => PomodoroTaskCreateWithoutUserInput, {nullable:false})
    @Type(() => PomodoroTaskCreateWithoutUserInput)
    create!: PomodoroTaskCreateWithoutUserInput;
}
