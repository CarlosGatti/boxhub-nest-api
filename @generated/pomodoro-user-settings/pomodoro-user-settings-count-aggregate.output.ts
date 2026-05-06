import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PomodoroUserSettingsCountAggregate {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    focusMinutes!: number;

    @Field(() => Int, {nullable:false})
    shortBreakMinutes!: number;

    @Field(() => Int, {nullable:false})
    longBreakMinutes!: number;

    @Field(() => Int, {nullable:false})
    longBreakEvery!: number;

    @Field(() => Int, {nullable:false})
    autoStartBreaks!: number;

    @Field(() => Int, {nullable:false})
    autoStartFocus!: number;

    @Field(() => Int, {nullable:false})
    timezone!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
