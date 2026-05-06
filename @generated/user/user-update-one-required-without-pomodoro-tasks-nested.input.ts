import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPomodoroTasksInput } from './user-create-without-pomodoro-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPomodoroTasksInput } from './user-create-or-connect-without-pomodoro-tasks.input';
import { UserUpsertWithoutPomodoroTasksInput } from './user-upsert-without-pomodoro-tasks.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPomodoroTasksInput } from './user-update-to-one-with-where-without-pomodoro-tasks.input';

@InputType()
export class UserUpdateOneRequiredWithoutPomodoroTasksNestedInput {

    @Field(() => UserCreateWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutPomodoroTasksInput)
    create?: UserCreateWithoutPomodoroTasksInput;

    @Field(() => UserCreateOrConnectWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPomodoroTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutPomodoroTasksInput;

    @Field(() => UserUpsertWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => UserUpsertWithoutPomodoroTasksInput)
    upsert?: UserUpsertWithoutPomodoroTasksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPomodoroTasksInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPomodoroTasksInput)
    update?: UserUpdateToOneWithWhereWithoutPomodoroTasksInput;
}
