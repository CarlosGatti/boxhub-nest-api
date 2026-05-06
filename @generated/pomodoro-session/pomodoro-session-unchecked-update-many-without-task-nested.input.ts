import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionCreateWithoutTaskInput } from './pomodoro-session-create-without-task.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateOrConnectWithoutTaskInput } from './pomodoro-session-create-or-connect-without-task.input';
import { PomodoroSessionUpsertWithWhereUniqueWithoutTaskInput } from './pomodoro-session-upsert-with-where-unique-without-task.input';
import { PomodoroSessionCreateManyTaskInputEnvelope } from './pomodoro-session-create-many-task-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { PomodoroSessionUpdateWithWhereUniqueWithoutTaskInput } from './pomodoro-session-update-with-where-unique-without-task.input';
import { PomodoroSessionUpdateManyWithWhereWithoutTaskInput } from './pomodoro-session-update-many-with-where-without-task.input';
import { PomodoroSessionScalarWhereInput } from './pomodoro-session-scalar-where.input';

@InputType()
export class PomodoroSessionUncheckedUpdateManyWithoutTaskNestedInput {

    @Field(() => [PomodoroSessionCreateWithoutTaskInput], {nullable:true})
    @Type(() => PomodoroSessionCreateWithoutTaskInput)
    create?: Array<PomodoroSessionCreateWithoutTaskInput>;

    @Field(() => [PomodoroSessionCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => PomodoroSessionCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<PomodoroSessionCreateOrConnectWithoutTaskInput>;

    @Field(() => [PomodoroSessionUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => PomodoroSessionUpsertWithWhereUniqueWithoutTaskInput)
    upsert?: Array<PomodoroSessionUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => PomodoroSessionCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => PomodoroSessionCreateManyTaskInputEnvelope)
    createMany?: PomodoroSessionCreateManyTaskInputEnvelope;

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

    @Field(() => [PomodoroSessionUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => PomodoroSessionUpdateWithWhereUniqueWithoutTaskInput)
    update?: Array<PomodoroSessionUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [PomodoroSessionUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    @Type(() => PomodoroSessionUpdateManyWithWhereWithoutTaskInput)
    updateMany?: Array<PomodoroSessionUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [PomodoroSessionScalarWhereInput], {nullable:true})
    @Type(() => PomodoroSessionScalarWhereInput)
    deleteMany?: Array<PomodoroSessionScalarWhereInput>;
}
