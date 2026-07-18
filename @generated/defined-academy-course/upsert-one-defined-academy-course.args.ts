import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateInput } from './defined-academy-course-create.input';
import { DefinedAcademyCourseUpdateInput } from './defined-academy-course-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyCourseArgs {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateInput)
    create!: DefinedAcademyCourseCreateInput;

    @Field(() => DefinedAcademyCourseUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateInput)
    update!: DefinedAcademyCourseUpdateInput;
}
