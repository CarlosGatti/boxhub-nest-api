import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateWithoutModuleInput } from './defined-academy-lesson-create-without-module.input';

@InputType()
export class DefinedAcademyLessonCreateOrConnectWithoutModuleInput {

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

    @Field(() => DefinedAcademyLessonCreateWithoutModuleInput, {nullable:false})
    @Type(() => DefinedAcademyLessonCreateWithoutModuleInput)
    create!: DefinedAcademyLessonCreateWithoutModuleInput;
}
