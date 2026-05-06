import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateWithoutUserInput } from './pomodoro-session-create-without-user.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateOrConnectWithoutUserInput } from './pomodoro-session-create-or-connect-without-user.input';
import { PomodoroSessionCreateManyUserInputEnvelope } from './pomodoro-session-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';

@InputType()
export class PomodoroSessionCreateNestedManyWithoutUserInput {

    @Field(() => [PomodoroSessionCreateWithoutUserInput], {nullable:true})
    @Type(() => PomodoroSessionCreateWithoutUserInput)
    create?: Array<PomodoroSessionCreateWithoutUserInput>;

    @Field(() => [PomodoroSessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PomodoroSessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PomodoroSessionCreateOrConnectWithoutUserInput>;

    @Field(() => PomodoroSessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PomodoroSessionCreateManyUserInputEnvelope)
    createMany?: PomodoroSessionCreateManyUserInputEnvelope;

    @Field(() => [PomodoroSessionWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroSessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>>;
}
