import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateWithoutUserInput } from './pomodoro-session-create-without-user.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateOrConnectWithoutUserInput } from './pomodoro-session-create-or-connect-without-user.input';
import { PomodoroSessionUpsertWithWhereUniqueWithoutUserInput } from './pomodoro-session-upsert-with-where-unique-without-user.input';
import { PomodoroSessionCreateManyUserInputEnvelope } from './pomodoro-session-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { PomodoroSessionUpdateWithWhereUniqueWithoutUserInput } from './pomodoro-session-update-with-where-unique-without-user.input';
import { PomodoroSessionUpdateManyWithWhereWithoutUserInput } from './pomodoro-session-update-many-with-where-without-user.input';
import { PomodoroSessionScalarWhereInput } from './pomodoro-session-scalar-where.input';

@InputType()
export class PomodoroSessionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [PomodoroSessionCreateWithoutUserInput], {nullable:true})
    @Type(() => PomodoroSessionCreateWithoutUserInput)
    create?: Array<PomodoroSessionCreateWithoutUserInput>;

    @Field(() => [PomodoroSessionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PomodoroSessionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PomodoroSessionCreateOrConnectWithoutUserInput>;

    @Field(() => [PomodoroSessionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PomodoroSessionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PomodoroSessionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PomodoroSessionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PomodoroSessionCreateManyUserInputEnvelope)
    createMany?: PomodoroSessionCreateManyUserInputEnvelope;

    @Field(() => [PomodoroSessionWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroSessionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>>;

    @Field(() => [PomodoroSessionWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroSessionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>>;

    @Field(() => [PomodoroSessionWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroSessionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>>;

    @Field(() => [PomodoroSessionWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroSessionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>>;

    @Field(() => [PomodoroSessionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PomodoroSessionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PomodoroSessionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PomodoroSessionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PomodoroSessionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PomodoroSessionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PomodoroSessionScalarWhereInput], {nullable:true})
    @Type(() => PomodoroSessionScalarWhereInput)
    deleteMany?: Array<PomodoroSessionScalarWhereInput>;
}
