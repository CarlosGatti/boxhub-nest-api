import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPomodoroSessionsInput } from './user-update-without-pomodoro-sessions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPomodoroSessionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPomodoroSessionsInput)
    data!: UserUpdateWithoutPomodoroSessionsInput;
}
