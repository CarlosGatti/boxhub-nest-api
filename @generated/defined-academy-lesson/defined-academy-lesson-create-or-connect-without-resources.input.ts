import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateWithoutResourcesInput } from './defined-academy-lesson-create-without-resources.input';

@InputType()
export class DefinedAcademyLessonCreateOrConnectWithoutResourcesInput {

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

    @Field(() => DefinedAcademyLessonCreateWithoutResourcesInput, {nullable:false})
    @Type(() => DefinedAcademyLessonCreateWithoutResourcesInput)
    create!: DefinedAcademyLessonCreateWithoutResourcesInput;
}
