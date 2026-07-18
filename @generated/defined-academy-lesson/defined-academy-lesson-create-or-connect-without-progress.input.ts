import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateWithoutProgressInput } from './defined-academy-lesson-create-without-progress.input';

@InputType()
export class DefinedAcademyLessonCreateOrConnectWithoutProgressInput {

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

    @Field(() => DefinedAcademyLessonCreateWithoutProgressInput, {nullable:false})
    @Type(() => DefinedAcademyLessonCreateWithoutProgressInput)
    create!: DefinedAcademyLessonCreateWithoutProgressInput;
}
