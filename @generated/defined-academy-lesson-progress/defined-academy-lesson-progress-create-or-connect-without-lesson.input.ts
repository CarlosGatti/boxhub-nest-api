import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateWithoutLessonInput } from './defined-academy-lesson-progress-create-without-lesson.input';

@InputType()
export class DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput {

    @Field(() => DefinedAcademyLessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>;

    @Field(() => DefinedAcademyLessonProgressCreateWithoutLessonInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutLessonInput)
    create!: DefinedAcademyLessonProgressCreateWithoutLessonInput;
}
