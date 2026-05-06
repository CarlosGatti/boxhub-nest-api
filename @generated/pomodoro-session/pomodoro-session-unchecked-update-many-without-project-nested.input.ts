import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateWithoutProjectInput } from './pomodoro-session-create-without-project.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateOrConnectWithoutProjectInput } from './pomodoro-session-create-or-connect-without-project.input';
import { PomodoroSessionUpsertWithWhereUniqueWithoutProjectInput } from './pomodoro-session-upsert-with-where-unique-without-project.input';
import { PomodoroSessionCreateManyProjectInputEnvelope } from './pomodoro-session-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { PomodoroSessionUpdateWithWhereUniqueWithoutProjectInput } from './pomodoro-session-update-with-where-unique-without-project.input';
import { PomodoroSessionUpdateManyWithWhereWithoutProjectInput } from './pomodoro-session-update-many-with-where-without-project.input';
import { PomodoroSessionScalarWhereInput } from './pomodoro-session-scalar-where.input';

@InputType()
export class PomodoroSessionUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [PomodoroSessionCreateWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroSessionCreateWithoutProjectInput)
    create?: Array<PomodoroSessionCreateWithoutProjectInput>;

    @Field(() => [PomodoroSessionCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroSessionCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<PomodoroSessionCreateOrConnectWithoutProjectInput>;

    @Field(() => [PomodoroSessionUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroSessionUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<PomodoroSessionUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => PomodoroSessionCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => PomodoroSessionCreateManyProjectInputEnvelope)
    createMany?: PomodoroSessionCreateManyProjectInputEnvelope;

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

    @Field(() => [PomodoroSessionUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroSessionUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<PomodoroSessionUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [PomodoroSessionUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroSessionUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<PomodoroSessionUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [PomodoroSessionScalarWhereInput], {nullable:true})
    @Type(() => PomodoroSessionScalarWhereInput)
    deleteMany?: Array<PomodoroSessionScalarWhereInput>;
}
