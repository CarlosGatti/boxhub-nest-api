import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonUpdateInput } from './defined-academy-lesson-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyLessonArgs {

    @Field(() => DefinedAcademyLessonUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateInput)
    data!: DefinedAcademyLessonUpdateInput;

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;
}
