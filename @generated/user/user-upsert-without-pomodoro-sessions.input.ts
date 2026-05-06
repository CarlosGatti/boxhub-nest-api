import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPomodoroSessionsInput } from './user-update-without-pomodoro-sessions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPomodoroSessionsInput } from './user-create-without-pomodoro-sessions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPomodoroSessionsInput {

    @Field(() => UserUpdateWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPomodoroSessionsInput)
    update!: UserUpdateWithoutPomodoroSessionsInput;

    @Field(() => UserCreateWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => UserCreateWithoutPomodoroSessionsInput)
    create!: UserCreateWithoutPomodoroSessionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
