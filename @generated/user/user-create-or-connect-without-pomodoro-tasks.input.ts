import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPomodoroTasksInput } from './user-create-without-pomodoro-tasks.input';

@InputType()
export class UserCreateOrConnectWithoutPomodoroTasksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => UserCreateWithoutPomodoroTasksInput)
    create!: UserCreateWithoutPomodoroTasksInput;
}
