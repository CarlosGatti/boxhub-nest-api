import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutPomodoroSessionsInput } from './defined-project-create-without-pomodoro-sessions.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput } from './defined-project-create-or-connect-without-pomodoro-sessions.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@InputType()
export class DefinedProjectCreateNestedOneWithoutPomodoroSessionsInput {

    @Field(() => DefinedProjectCreateWithoutPomodoroSessionsInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutPomodoroSessionsInput)
    create?: DefinedProjectCreateWithoutPomodoroSessionsInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
