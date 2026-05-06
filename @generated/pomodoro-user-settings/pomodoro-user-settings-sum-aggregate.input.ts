import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PomodoroUserSettingsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    focusMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    shortBreakMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    longBreakMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    longBreakEvery?: true;
}
