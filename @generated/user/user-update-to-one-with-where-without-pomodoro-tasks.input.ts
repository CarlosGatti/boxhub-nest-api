import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPomodoroTasksInput } from './user-update-without-pomodoro-tasks.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPomodoroTasksInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPomodoroTasksInput, {nullable:false})
    @Type(() => UserUpdateWithoutPomodoroTasksInput)
    data!: UserUpdateWithoutPomodoroTasksInput;
}
