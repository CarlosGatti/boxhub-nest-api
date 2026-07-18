import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyLessonProgressSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    enrollmentId?: number;

    @Field(() => Int, {nullable:true})
    lessonId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    progressPercentage?: number;

    @Field(() => Int, {nullable:true})
    lastPositionSeconds?: number;
}
