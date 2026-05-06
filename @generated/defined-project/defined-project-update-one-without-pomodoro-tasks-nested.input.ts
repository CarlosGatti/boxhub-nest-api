import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutPomodoroTasksInput } from './defined-project-create-without-pomodoro-tasks.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutPomodoroTasksInput } from './defined-project-create-or-connect-without-pomodoro-tasks.input';
import { DefinedProjectUpsertWithoutPomodoroTasksInput } from './defined-project-upsert-without-pomodoro-tasks.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { DefinedProjectUpdateToOneWithWhereWithoutPomodoroTasksInput } from './defined-project-update-to-one-with-where-without-pomodoro-tasks.input';

@InputType()
export class DefinedProjectUpdateOneWithoutPomodoroTasksNestedInput {

    @Field(() => DefinedProjectCreateWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutPomodoroTasksInput)
    create?: DefinedProjectCreateWithoutPomodoroTasksInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutPomodoroTasksInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutPomodoroTasksInput;

    @Field(() => DefinedProjectUpsertWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => DefinedProjectUpsertWithoutPomodoroTasksInput)
    upsert?: DefinedProjectUpsertWithoutPomodoroTasksInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    disconnect?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    delete?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectUpdateToOneWithWhereWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => DefinedProjectUpdateToOneWithWhereWithoutPomodoroTasksInput)
    update?: DefinedProjectUpdateToOneWithWhereWithoutPomodoroTasksInput;
}
