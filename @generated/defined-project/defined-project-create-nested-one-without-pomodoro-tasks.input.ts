import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutPomodoroTasksInput } from './defined-project-create-without-pomodoro-tasks.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutPomodoroTasksInput } from './defined-project-create-or-connect-without-pomodoro-tasks.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@InputType()
export class DefinedProjectCreateNestedOneWithoutPomodoroTasksInput {

    @Field(() => DefinedProjectCreateWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutPomodoroTasksInput)
    create?: DefinedProjectCreateWithoutPomodoroTasksInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutPomodoroTasksInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutPomodoroTasksInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
