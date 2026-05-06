import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PomodoroUserSettingsAvgAggregate {

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    focusMinutes?: number;

    @Field(() => Float, {nullable:true})
    shortBreakMinutes?: number;

    @Field(() => Float, {nullable:true})
    longBreakMinutes?: number;

    @Field(() => Float, {nullable:true})
    longBreakEvery?: number;
}
