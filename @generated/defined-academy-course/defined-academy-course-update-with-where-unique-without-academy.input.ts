import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseUpdateWithoutAcademyInput } from './defined-academy-course-update-without-academy.input';

@InputType()
export class DefinedAcademyCourseUpdateWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutAcademyInput)
    data!: DefinedAcademyCourseUpdateWithoutAcademyInput;
}
