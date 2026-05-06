import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateWithoutTaskInput } from './pomodoro-session-create-without-task.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateOrConnectWithoutTaskInput } from './pomodoro-session-create-or-connect-without-task.input';
import { PomodoroSessionCreateManyTaskInputEnvelope } from './pomodoro-session-create-many-task-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';

@InputType()
export class PomodoroSessionCreateNestedManyWithoutTaskInput {

    @Field(() => [PomodoroSessionCreateWithoutTaskInput], {nullable:true})
    @Type(() => PomodoroSessionCreateWithoutTaskInput)
    create?: Array<PomodoroSessionCreateWithoutTaskInput>;

    @Field(() => [PomodoroSessionCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => PomodoroSessionCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<PomodoroSessionCreateOrConnectWithoutTaskInput>;

    @Field(() => PomodoroSessionCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => PomodoroSessionCreateManyTaskInputEnvelope)
    createMany?: PomodoroSessionCreateManyTaskInputEnvelope;

    @Field(() => [PomodoroSessionWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroSessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>>;
}
