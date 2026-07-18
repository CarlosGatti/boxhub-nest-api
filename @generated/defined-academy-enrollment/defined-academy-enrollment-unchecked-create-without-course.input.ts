import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from '../prisma/defined-academy-enrollment-status.enum';
import { DefinedAcademyLessonProgressUncheckedCreateNestedManyWithoutEnrollmentInput } from '../defined-academy-lesson-progress/defined-academy-lesson-progress-unchecked-create-nested-many-without-enrollment.input';

@InputType()
export class DefinedAcademyEnrollmentUncheckedCreateWithoutCourseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => DefinedAcademyEnrollmentStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyEnrollmentStatus;

    @Field(() => Date, {nullable:true})
    enrolledAt?: Date | string;

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

    @Field(() => DefinedAcademyLessonProgressUncheckedCreateNestedManyWithoutEnrollmentInput, {nullable:true})
    progress?: DefinedAcademyLessonProgressUncheckedCreateNestedManyWithoutEnrollmentInput;
}
