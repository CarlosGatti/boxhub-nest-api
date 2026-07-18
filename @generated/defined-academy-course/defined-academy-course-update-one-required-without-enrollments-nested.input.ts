import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutEnrollmentsInput } from './defined-academy-course-create-without-enrollments.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput } from './defined-academy-course-create-or-connect-without-enrollments.input';
import { DefinedAcademyCourseUpsertWithoutEnrollmentsInput } from './defined-academy-course-upsert-without-enrollments.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { DefinedAcademyCourseUpdateToOneWithWhereWithoutEnrollmentsInput } from './defined-academy-course-update-to-one-with-where-without-enrollments.input';

@InputType()
export class DefinedAcademyCourseUpdateOneRequiredWithoutEnrollmentsNestedInput {

    @Field(() => DefinedAcademyCourseCreateWithoutEnrollmentsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutEnrollmentsInput)
    create?: DefinedAcademyCourseCreateWithoutEnrollmentsInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutEnrollmentsInput;

    @Field(() => DefinedAcademyCourseUpsertWithoutEnrollmentsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpsertWithoutEnrollmentsInput)
    upsert?: DefinedAcademyCourseUpsertWithoutEnrollmentsInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutEnrollmentsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutEnrollmentsInput)
    update?: DefinedAcademyCourseUpdateToOneWithWhereWithoutEnrollmentsInput;
}
