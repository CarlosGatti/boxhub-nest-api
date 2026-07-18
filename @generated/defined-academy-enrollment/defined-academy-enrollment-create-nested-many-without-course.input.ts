import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateWithoutCourseInput } from './defined-academy-enrollment-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentCreateOrConnectWithoutCourseInput } from './defined-academy-enrollment-create-or-connect-without-course.input';
import { DefinedAcademyEnrollmentCreateManyCourseInputEnvelope } from './defined-academy-enrollment-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';

@InputType()
export class DefinedAcademyEnrollmentCreateNestedManyWithoutCourseInput {

    @Field(() => [DefinedAcademyEnrollmentCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateWithoutCourseInput)
    create?: Array<DefinedAcademyEnrollmentCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyEnrollmentCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyEnrollmentCreateOrConnectWithoutCourseInput>;

    @Field(() => DefinedAcademyEnrollmentCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyEnrollmentCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;
}
