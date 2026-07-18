import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentUpdateWithoutCourseInput } from './defined-academy-enrollment-update-without-course.input';
import { DefinedAcademyEnrollmentCreateWithoutCourseInput } from './defined-academy-enrollment-create-without-course.input';

@InputType()
export class DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;

    @Field(() => DefinedAcademyEnrollmentUpdateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateWithoutCourseInput)
    update!: DefinedAcademyEnrollmentUpdateWithoutCourseInput;

    @Field(() => DefinedAcademyEnrollmentCreateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentCreateWithoutCourseInput)
    create!: DefinedAcademyEnrollmentCreateWithoutCourseInput;
}
