import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskCreateWithoutProjectInput } from './pomodoro-task-create-without-project.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateOrConnectWithoutProjectInput } from './pomodoro-task-create-or-connect-without-project.input';
import { PomodoroTaskCreateManyProjectInputEnvelope } from './pomodoro-task-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';

@InputType()
export class PomodoroTaskCreateNestedManyWithoutProjectInput {

    @Field(() => [PomodoroTaskCreateWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroTaskCreateWithoutProjectInput)
    create?: Array<PomodoroTaskCreateWithoutProjectInput>;

    @Field(() => [PomodoroTaskCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroTaskCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<PomodoroTaskCreateOrConnectWithoutProjectInput>;

    @Field(() => PomodoroTaskCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => PomodoroTaskCreateManyProjectInputEnvelope)
    createMany?: PomodoroTaskCreateManyProjectInputEnvelope;

    @Field(() => [PomodoroTaskWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroTaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>>;
}
