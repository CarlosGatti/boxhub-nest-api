import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutPomodoroSessionsInput } from './defined-project-create-without-pomodoro-sessions.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput } from './defined-project-create-or-connect-without-pomodoro-sessions.input';
import { DefinedProjectUpsertWithoutPomodoroSessionsInput } from './defined-project-upsert-without-pomodoro-sessions.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { DefinedProjectUpdateToOneWithWhereWithoutPomodoroSessionsInput } from './defined-project-update-to-one-with-where-without-pomodoro-sessions.input';

@InputType()
export class DefinedProjectUpdateOneWithoutPomodoroSessionsNestedInput {

    @Field(() => DefinedProjectCreateWithoutPomodoroSessionsInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutPomodoroSessionsInput)
    create?: DefinedProjectCreateWithoutPomodoroSessionsInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput;

    @Field(() => DefinedProjectUpsertWithoutPomodoroSessionsInput, {nullable:true})
    @Type(() => DefinedProjectUpsertWithoutPomodoroSessionsInput)
    upsert?: DefinedProjectUpsertWithoutPomodoroSessionsInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    disconnect?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    delete?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectUpdateToOneWithWhereWithoutPomodoroSessionsInput, {nullable:true})
    @Type(() => DefinedProjectUpdateToOneWithWhereWithoutPomodoroSessionsInput)
    update?: DefinedProjectUpdateToOneWithWhereWithoutPomodoroSessionsInput;
}
