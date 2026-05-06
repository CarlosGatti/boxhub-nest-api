import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPomodoroSessionsInput } from './user-create-without-pomodoro-sessions.input';

@InputType()
export class UserCreateOrConnectWithoutPomodoroSessionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => UserCreateWithoutPomodoroSessionsInput)
    create!: UserCreateWithoutPomodoroSessionsInput;
}
