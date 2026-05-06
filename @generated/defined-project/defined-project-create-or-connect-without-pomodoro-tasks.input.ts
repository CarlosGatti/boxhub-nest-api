import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutPomodoroTasksInput } from './defined-project-create-without-pomodoro-tasks.input';

@InputType()
export class DefinedProjectCreateOrConnectWithoutPomodoroTasksInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutPomodoroTasksInput)
    create!: DefinedProjectCreateWithoutPomodoroTasksInput;
}
