import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class PomodoroUserSettings {

    @Field(() => ID, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false,defaultValue:25})
    focusMinutes!: number;

    @Field(() => Int, {nullable:false,defaultValue:5})
    shortBreakMinutes!: number;

    @Field(() => Int, {nullable:false,defaultValue:15})
    longBreakMinutes!: number;

    @Field(() => Int, {nullable:false,defaultValue:4})
    longBreakEvery!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    autoStartBreaks!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    autoStartFocus!: boolean;

    @Field(() => String, {nullable:false,defaultValue:'UTC'})
    timezone!: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
