import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateInput } from './defined-academy-lesson-create.input';
import { DefinedAcademyLessonUpdateInput } from './defined-academy-lesson-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyLessonArgs {

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

    @Field(() => DefinedAcademyLessonCreateInput, {nullable:false})
    @Type(() => DefinedAcademyLessonCreateInput)
    create!: DefinedAcademyLessonCreateInput;

    @Field(() => DefinedAcademyLessonUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateInput)
    update!: DefinedAcademyLessonUpdateInput;
}
