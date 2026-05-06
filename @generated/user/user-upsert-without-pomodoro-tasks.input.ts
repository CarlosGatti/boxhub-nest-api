import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPomodoroTasksInput } from './user-update-without-pomodoro-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPomodoroTasksInput } from './user-create-without-pomodoro-tasks.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPomodoroTasksInput {

    @Field(() => UserUpdateWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => UserUpdateWithoutPomodoroTasksInput)
    update!: UserUpdateWithoutPomodoroTasksInput;

    @Field(() => UserCreateWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => UserCreateWithoutPomodoroTasksInput)
    create!: UserCreateWithoutPomodoroTasksInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
