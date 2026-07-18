import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentUpdateWithoutCourseInput } from './defined-academy-enrollment-update-without-course.input';

@InputType()
export class DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutCourseInput {

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;

    @Field(() => DefinedAcademyEnrollmentUpdateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateWithoutCourseInput)
    data!: DefinedAcademyEnrollmentUpdateWithoutCourseInput;
}
