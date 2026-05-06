import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskCreateWithoutUserInput } from './pomodoro-task-create-without-user.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateOrConnectWithoutUserInput } from './pomodoro-task-create-or-connect-without-user.input';
import { PomodoroTaskCreateManyUserInputEnvelope } from './pomodoro-task-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';

@InputType()
export class PomodoroTaskUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PomodoroTaskCreateWithoutUserInput], {nullable:true})
    @Type(() => PomodoroTaskCreateWithoutUserInput)
    create?: Array<PomodoroTaskCreateWithoutUserInput>;

    @Field(() => [PomodoroTaskCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PomodoroTaskCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PomodoroTaskCreateOrConnectWithoutUserInput>;

    @Field(() => PomodoroTaskCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PomodoroTaskCreateManyUserInputEnvelope)
    createMany?: PomodoroTaskCreateManyUserInputEnvelope;

    @Field(() => [PomodoroTaskWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroTaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>>;
}
