import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PomodoroSessionAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    taskId?: number;

    @Field(() => Float, {nullable:true})
    projectId?: number;

    @Field(() => Float, {nullable:true})
    durationMinutes?: number;
}
