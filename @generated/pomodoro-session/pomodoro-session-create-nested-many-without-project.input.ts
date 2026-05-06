import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateWithoutProjectInput } from './pomodoro-session-create-without-project.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateOrConnectWithoutProjectInput } from './pomodoro-session-create-or-connect-without-project.input';
import { PomodoroSessionCreateManyProjectInputEnvelope } from './pomodoro-session-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';

@InputType()
export class PomodoroSessionCreateNestedManyWithoutProjectInput {

    @Field(() => [PomodoroSessionCreateWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroSessionCreateWithoutProjectInput)
    create?: Array<PomodoroSessionCreateWithoutProjectInput>;

    @Field(() => [PomodoroSessionCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroSessionCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<PomodoroSessionCreateOrConnectWithoutProjectInput>;

    @Field(() => PomodoroSessionCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => PomodoroSessionCreateManyProjectInputEnvelope)
    createMany?: PomodoroSessionCreateManyProjectInputEnvelope;

    @Field(() => [PomodoroSessionWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroSessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>>;
}
