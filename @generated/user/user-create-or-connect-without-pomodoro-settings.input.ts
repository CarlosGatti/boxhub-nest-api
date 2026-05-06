import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPomodoroSettingsInput } from './user-create-without-pomodoro-settings.input';

@InputType()
export class UserCreateOrConnectWithoutPomodoroSettingsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutPomodoroSettingsInput, {nullable:false})
    @Type(() => UserCreateWithoutPomodoroSettingsInput)
    create!: UserCreateWithoutPomodoroSettingsInput;
}
