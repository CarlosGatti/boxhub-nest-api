import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyLessonProgressMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    enrollmentId?: true;

    @Field(() => Boolean, {nullable:true})
    lessonId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    progressPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    lastPositionSeconds?: true;

    @Field(() => Boolean, {nullable:true})
    startedAt?: true;

    @Field(() => Boolean, {nullable:true})
    completedAt?: true;

    @Field(() => Boolean, {nullable:true})
    lastAccessedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
