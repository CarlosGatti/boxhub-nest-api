import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateWithoutCourseInput } from './defined-academy-enrollment-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentCreateOrConnectWithoutCourseInput } from './defined-academy-enrollment-create-or-connect-without-course.input';
import { DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutCourseInput } from './defined-academy-enrollment-upsert-with-where-unique-without-course.input';
import { DefinedAcademyEnrollmentCreateManyCourseInputEnvelope } from './defined-academy-enrollment-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutCourseInput } from './defined-academy-enrollment-update-with-where-unique-without-course.input';
import { DefinedAcademyEnrollmentUpdateManyWithWhereWithoutCourseInput } from './defined-academy-enrollment-update-many-with-where-without-course.input';
import { DefinedAcademyEnrollmentScalarWhereInput } from './defined-academy-enrollment-scalar-where.input';

@InputType()
export class DefinedAcademyEnrollmentUpdateManyWithoutCourseNestedInput {

    @Field(() => [DefinedAcademyEnrollmentCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateWithoutCourseInput)
    create?: Array<DefinedAcademyEnrollmentCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyEnrollmentCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyEnrollmentCreateOrConnectWithoutCourseInput>;

    @Field(() => [DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutCourseInput)
    upsert?: Array<DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => DefinedAcademyEnrollmentCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyEnrollmentCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;

    @Field(() => [DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutCourseInput)
    update?: Array<DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [DefinedAcademyEnrollmentUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentUpdateManyWithWhereWithoutCourseInput)
    updateMany?: Array<DefinedAcademyEnrollmentUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [DefinedAcademyEnrollmentScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentScalarWhereInput)
    deleteMany?: Array<DefinedAcademyEnrollmentScalarWhereInput>;
}
