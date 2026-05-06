import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPomodoroSessionsInput } from './user-create-without-pomodoro-sessions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPomodoroSessionsInput } from './user-create-or-connect-without-pomodoro-sessions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPomodoroSessionsInput {

    @Field(() => UserCreateWithoutPomodoroSessionsInput, {nullable:true})
    @Type(() => UserCreateWithoutPomodoroSessionsInput)
    create?: UserCreateWithoutPomodoroSessionsInput;

    @Field(() => UserCreateOrConnectWithoutPomodoroSessionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPomodoroSessionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPomodoroSessionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
