import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyLessonProgressAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    enrollmentId?: number;

    @Field(() => Float, {nullable:true})
    lessonId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    progressPercentage?: number;

    @Field(() => Float, {nullable:true})
    lastPositionSeconds?: number;
}
