import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PomodoroUserSettingsMaxAggregateInput {

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

    @Field(() => Boolean, {nullable:true})
    autoStartBreaks?: true;

    @Field(() => Boolean, {nullable:true})
    autoStartFocus?: true;

    @Field(() => Boolean, {nullable:true})
    timezone?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
