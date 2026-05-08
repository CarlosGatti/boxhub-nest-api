import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedProjectCount {

    @Field(() => Int, {nullable:false})
    internalNotes?: number;

    @Field(() => Int, {nullable:false})
    intakeForms?: number;

    @Field(() => Int, {nullable:false})
    invoices?: number;

    @Field(() => Int, {nullable:false})
    pomodoroTasks?: number;

    @Field(() => Int, {nullable:false})
    pomodoroSessions?: number;
}
