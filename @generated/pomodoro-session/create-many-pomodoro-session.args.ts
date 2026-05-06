import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroSessionCreateManyInput } from './pomodoro-session-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPomodoroSessionArgs {

    @Field(() => [PomodoroSessionCreateManyInput], {nullable:false})
    @Type(() => PomodoroSessionCreateManyInput)
    data!: Array<PomodoroSessionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
