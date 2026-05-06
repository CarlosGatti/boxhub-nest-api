import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskCreateWithoutProjectInput } from './pomodoro-task-create-without-project.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateOrConnectWithoutProjectInput } from './pomodoro-task-create-or-connect-without-project.input';
import { PomodoroTaskUpsertWithWhereUniqueWithoutProjectInput } from './pomodoro-task-upsert-with-where-unique-without-project.input';
import { PomodoroTaskCreateManyProjectInputEnvelope } from './pomodoro-task-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { PomodoroTaskUpdateWithWhereUniqueWithoutProjectInput } from './pomodoro-task-update-with-where-unique-without-project.input';
import { PomodoroTaskUpdateManyWithWhereWithoutProjectInput } from './pomodoro-task-update-many-with-where-without-project.input';
import { PomodoroTaskScalarWhereInput } from './pomodoro-task-scalar-where.input';

@InputType()
export class PomodoroTaskUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [PomodoroTaskCreateWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroTaskCreateWithoutProjectInput)
    create?: Array<PomodoroTaskCreateWithoutProjectInput>;

    @Field(() => [PomodoroTaskCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroTaskCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<PomodoroTaskCreateOrConnectWithoutProjectInput>;

    @Field(() => [PomodoroTaskUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroTaskUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<PomodoroTaskUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => PomodoroTaskCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => PomodoroTaskCreateManyProjectInputEnvelope)
    createMany?: PomodoroTaskCreateManyProjectInputEnvelope;

    @Field(() => [PomodoroTaskWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroTaskWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>>;

    @Field(() => [PomodoroTaskWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroTaskWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>>;

    @Field(() => [PomodoroTaskWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroTaskWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>>;

    @Field(() => [PomodoroTaskWhereUniqueInput], {nullable:true})
    @Type(() => PomodoroTaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>>;

    @Field(() => [PomodoroTaskUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroTaskUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<PomodoroTaskUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [PomodoroTaskUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => PomodoroTaskUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<PomodoroTaskUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [PomodoroTaskScalarWhereInput], {nullable:true})
    @Type(() => PomodoroTaskScalarWhereInput)
    deleteMany?: Array<PomodoroTaskScalarWhereInput>;
}
