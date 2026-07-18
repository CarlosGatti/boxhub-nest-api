import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutModulesInput } from './defined-academy-course-create-without-modules.input';

@InputType()
export class DefinedAcademyCourseCreateOrConnectWithoutModulesInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseCreateWithoutModulesInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutModulesInput)
    create!: DefinedAcademyCourseCreateWithoutModulesInput;
}
