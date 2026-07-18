import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutEnrollmentsInput } from './defined-academy-course-create-without-enrollments.input';

@InputType()
export class DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseCreateWithoutEnrollmentsInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutEnrollmentsInput)
    create!: DefinedAcademyCourseCreateWithoutEnrollmentsInput;
}
