import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressUpdateWithoutUserInput } from './defined-academy-lesson-progress-update-without-user.input';
import { DefinedAcademyLessonProgressCreateWithoutUserInput } from './defined-academy-lesson-progress-create-without-user.input';

@InputType()
export class DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => DefinedAcademyLessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>;

    @Field(() => DefinedAcademyLessonProgressUpdateWithoutUserInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressUpdateWithoutUserInput)
    update!: DefinedAcademyLessonProgressUpdateWithoutUserInput;

    @Field(() => DefinedAcademyLessonProgressCreateWithoutUserInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutUserInput)
    create!: DefinedAcademyLessonProgressCreateWithoutUserInput;
}
