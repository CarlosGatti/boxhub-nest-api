import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCourseUpdateInput } from './defined-academy-course-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyCourseArgs {

    @Field(() => DefinedAcademyCourseUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateInput)
    data!: DefinedAcademyCourseUpdateInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;
}
