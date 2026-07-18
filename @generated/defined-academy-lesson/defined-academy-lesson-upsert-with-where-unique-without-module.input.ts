import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonUpdateWithoutModuleInput } from './defined-academy-lesson-update-without-module.input';
import { DefinedAcademyLessonCreateWithoutModuleInput } from './defined-academy-lesson-create-without-module.input';

@InputType()
export class DefinedAcademyLessonUpsertWithWhereUniqueWithoutModuleInput {

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

    @Field(() => DefinedAcademyLessonUpdateWithoutModuleInput, {nullable:false})
    @Type(() => DefinedAcademyLessonUpdateWithoutModuleInput)
    update!: DefinedAcademyLessonUpdateWithoutModuleInput;

    @Field(() => DefinedAcademyLessonCreateWithoutModuleInput, {nullable:false})
    @Type(() => DefinedAcademyLessonCreateWithoutModuleInput)
    create!: DefinedAcademyLessonCreateWithoutModuleInput;
}
