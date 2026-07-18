import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressUpdateWithoutLessonInput } from './defined-academy-lesson-progress-update-without-lesson.input';

@InputType()
export class DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutLessonInput {

    @Field(() => DefinedAcademyLessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>;

    @Field(() => DefinedAcademyLessonProgressUpdateWithoutLessonInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressUpdateWithoutLessonInput)
    data!: DefinedAcademyLessonProgressUpdateWithoutLessonInput;
}
