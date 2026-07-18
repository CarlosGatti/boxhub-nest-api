import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from '../prisma/defined-academy-enrollment-status.enum';
import { DefinedAcademyCourse } from '../defined-academy-course/defined-academy-course.model';
import { User } from '../user/user.model';
import { DefinedAcademyLessonProgress } from '../defined-academy-lesson-progress/defined-academy-lesson-progress.model';
import { DefinedAcademyEnrollmentCount } from './defined-academy-enrollment-count.output';

@ObjectType()
export class DefinedAcademyEnrollment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    courseId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => DefinedAcademyEnrollmentStatus, {nullable:false,defaultValue:'ENROLLED'})
    status!: keyof typeof DefinedAcademyEnrollmentStatus;

    @Field(() => Date, {nullable:false})
    enrolledAt!: Date;

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

    @Field(() => DefinedAcademyCourse, {nullable:false})
    course?: DefinedAcademyCourse;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [DefinedAcademyLessonProgress], {nullable:true})
    progress?: Array<DefinedAcademyLessonProgress>;

    @Field(() => DefinedAcademyEnrollmentCount, {nullable:false})
    _count?: DefinedAcademyEnrollmentCount;
}
