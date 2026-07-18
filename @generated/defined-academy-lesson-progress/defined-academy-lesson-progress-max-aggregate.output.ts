import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from '../prisma/defined-academy-lesson-progress-status.enum';

@ObjectType()
export class DefinedAcademyLessonProgressMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    enrollmentId?: number;

    @Field(() => Int, {nullable:true})
    lessonId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => DefinedAcademyLessonProgressStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyLessonProgressStatus;

    @Field(() => Int, {nullable:true})
    progressPercentage?: number;

    @Field(() => Int, {nullable:true})
    lastPositionSeconds?: number;

    @Field(() => Date, {nullable:true})
    startedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastAccessedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
