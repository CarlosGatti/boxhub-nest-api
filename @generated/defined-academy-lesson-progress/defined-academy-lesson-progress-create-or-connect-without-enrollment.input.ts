import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateWithoutEnrollmentInput } from './defined-academy-lesson-progress-create-without-enrollment.input';

@InputType()
export class DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput {

    @Field(() => DefinedAcademyLessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>;

    @Field(() => DefinedAcademyLessonProgressCreateWithoutEnrollmentInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutEnrollmentInput)
    create!: DefinedAcademyLessonProgressCreateWithoutEnrollmentInput;
}
