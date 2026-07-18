import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressUpdateInput } from './defined-academy-lesson-progress-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyLessonProgressArgs {

    @Field(() => DefinedAcademyLessonProgressUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressUpdateInput)
    data!: DefinedAcademyLessonProgressUpdateInput;

    @Field(() => DefinedAcademyLessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>;
}
