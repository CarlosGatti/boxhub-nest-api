import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PomodoroUserSettingsSumAggregate {

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    focusMinutes?: number;

    @Field(() => Int, {nullable:true})
    shortBreakMinutes?: number;

    @Field(() => Int, {nullable:true})
    longBreakMinutes?: number;

    @Field(() => Int, {nullable:true})
    longBreakEvery?: number;
}
