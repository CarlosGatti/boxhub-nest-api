import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseUpdateWithoutCreatedByInput } from './defined-academy-course-update-without-created-by.input';
import { DefinedAcademyCourseCreateWithoutCreatedByInput } from './defined-academy-course-create-without-created-by.input';

@InputType()
export class DefinedAcademyCourseUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutCreatedByInput)
    update!: DefinedAcademyCourseUpdateWithoutCreatedByInput;

    @Field(() => DefinedAcademyCourseCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutCreatedByInput)
    create!: DefinedAcademyCourseCreateWithoutCreatedByInput;
}
