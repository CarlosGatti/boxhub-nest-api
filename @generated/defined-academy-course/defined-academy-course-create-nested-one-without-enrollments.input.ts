import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutEnrollmentsInput } from './defined-academy-course-create-without-enrollments.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput } from './defined-academy-course-create-or-connect-without-enrollments.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';

@InputType()
export class DefinedAcademyCourseCreateNestedOneWithoutEnrollmentsInput {

    @Field(() => DefinedAcademyCourseCreateWithoutEnrollmentsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutEnrollmentsInput)
    create?: DefinedAcademyCourseCreateWithoutEnrollmentsInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;
}
