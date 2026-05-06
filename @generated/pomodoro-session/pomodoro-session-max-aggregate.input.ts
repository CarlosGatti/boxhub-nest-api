import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PomodoroSessionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    mode?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    durationMinutes?: true;

    @Field(() => Boolean, {nullable:true})
    startedAt?: true;

    @Field(() => Boolean, {nullable:true})
    pausedAt?: true;

    @Field(() => Boolean, {nullable:true})
    resumedAt?: true;

    @Field(() => Boolean, {nullable:true})
    completedAt?: true;

    @Field(() => Boolean, {nullable:true})
    cancelledAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
