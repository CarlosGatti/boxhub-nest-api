import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressUpdateWithoutEnrollmentInput } from './defined-academy-lesson-progress-update-without-enrollment.input';

@InputType()
export class DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutEnrollmentInput {

    @Field(() => DefinedAcademyLessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>;

    @Field(() => DefinedAcademyLessonProgressUpdateWithoutEnrollmentInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressUpdateWithoutEnrollmentInput)
    data!: DefinedAcademyLessonProgressUpdateWithoutEnrollmentInput;
}
