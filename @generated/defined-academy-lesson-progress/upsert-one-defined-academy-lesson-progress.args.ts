import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateInput } from './defined-academy-lesson-progress-create.input';
import { DefinedAcademyLessonProgressUpdateInput } from './defined-academy-lesson-progress-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyLessonProgressArgs {

    @Field(() => DefinedAcademyLessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>;

    @Field(() => DefinedAcademyLessonProgressCreateInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateInput)
    create!: DefinedAcademyLessonProgressCreateInput;

    @Field(() => DefinedAcademyLessonProgressUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressUpdateInput)
    update!: DefinedAcademyLessonProgressUpdateInput;
}
