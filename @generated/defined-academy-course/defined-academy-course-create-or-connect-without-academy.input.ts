import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutAcademyInput } from './defined-academy-course-create-without-academy.input';

@InputType()
export class DefinedAcademyCourseCreateOrConnectWithoutAcademyInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutAcademyInput)
    create!: DefinedAcademyCourseCreateWithoutAcademyInput;
}
