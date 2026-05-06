import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroUserSettingsCreateManyInput } from './pomodoro-user-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPomodoroUserSettingsArgs {

    @Field(() => [PomodoroUserSettingsCreateManyInput], {nullable:false})
    @Type(() => PomodoroUserSettingsCreateManyInput)
    data!: Array<PomodoroUserSettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
