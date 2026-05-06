import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutPomodoroSessionsInput } from './defined-project-create-without-pomodoro-sessions.input';

@InputType()
export class DefinedProjectCreateOrConnectWithoutPomodoroSessionsInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutPomodoroSessionsInput)
    create!: DefinedProjectCreateWithoutPomodoroSessionsInput;
}
