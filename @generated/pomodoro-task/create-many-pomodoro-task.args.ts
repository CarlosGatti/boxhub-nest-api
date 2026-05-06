import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroTaskCreateManyInput } from './pomodoro-task-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPomodoroTaskArgs {

    @Field(() => [PomodoroTaskCreateManyInput], {nullable:false})
    @Type(() => PomodoroTaskCreateManyInput)
    data!: Array<PomodoroTaskCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
