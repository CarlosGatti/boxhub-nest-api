import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDefinedAcademyLessonOrThrowArgs {

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;
}
