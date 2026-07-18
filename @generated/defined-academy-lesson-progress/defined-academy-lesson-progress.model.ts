import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from '../prisma/defined-academy-lesson-progress-status.enum';
import { DefinedAcademyEnrollment } from '../defined-academy-enrollment/defined-academy-enrollment.model';
import { DefinedAcademyLesson } from '../defined-academy-lesson/defined-academy-lesson.model';
import { User } from '../user/user.model';

@ObjectType()
export class DefinedAcademyLessonProgress {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    enrollmentId!: number;

    @Field(() => Int, {nullable:false})
    lessonId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => DefinedAcademyLessonProgressStatus, {nullable:false,defaultValue:'NOT_STARTED'})
    status!: keyof typeof DefinedAcademyLessonProgressStatus;

    @Field(() => Int, {nullable:false,defaultValue:0})
    progressPercentage!: number;

    @Field(() => Int, {nullable:true})
    lastPositionSeconds!: number | null;

    @Field(() => Date, {nullable:true})
    startedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    completedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    lastAccessedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademyEnrollment, {nullable:false})
    enrollment?: DefinedAcademyEnrollment;

    @Field(() => DefinedAcademyLesson, {nullable:false})
    lesson?: DefinedAcademyLesson;

    @Field(() => User, {nullable:false})
    user?: User;
}
