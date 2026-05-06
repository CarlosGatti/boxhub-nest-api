import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskCreateWithoutUserInput } from './pomodoro-task-create-without-user.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateOrConnectWithoutUserInput } from './pomodoro-task-create-or-connect-without-user.input';
import { PomodoroTaskUpsertWithWhereUniqueWithoutUserInput } from './pomodoro-task-upsert-with-where-unique-without-user.input';
import { PomodoroTaskCreateManyUserInputEnvelope } from './pomodoro-task-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { PomodoroTaskUpdateWithWhereUniqueWithoutUserInput } from './pomodoro-task-update-with-where-unique-without-user.input';
import { PomodoroTaskUpdateManyWithWhereWithoutUserInput } from './pomodoro-task-update-many-with-where-without-user.input';
import { PomodoroTaskScalarWhereInput } from './pomodoro-task-scalar-where.input';

@InputType()
export class PomodoroTaskUpdateManyWithoutUserNestedInput {

    @Field(() => [PomodoroTaskCreateWithoutUserInput], {nullable:true})
    @Type(() => PomodoroTaskCreateWithoutUserInput)
    create?: Array<PomodoroTaskCreateWithoutUserInput>;

    @Field(() => [PomodoroTaskCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PomodoroTaskCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PomodoroTaskCreateOrConnectWithoutUserInput>;

    @Field(() => [PomodoroTaskUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PomodoroTaskUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PomodoroTaskUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PomodoroTaskCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PomodoroTaskCreateManyUserInputEnvelope)
    createMany?: PomodoroTaskCreateManyUserInputEnvelope;

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

    @Field(() => [PomodoroTaskUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PomodoroTaskUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PomodoroTaskUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PomodoroTaskUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PomodoroTaskUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PomodoroTaskUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PomodoroTaskScalarWhereInput], {nullable:true})
    @Type(() => PomodoroTaskScalarWhereInput)
    deleteMany?: Array<PomodoroTaskScalarWhereInput>;
}
