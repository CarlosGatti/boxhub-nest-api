import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseUpdateWithoutEnrollmentsInput } from './defined-academy-course-update-without-enrollments.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutEnrollmentsInput } from './defined-academy-course-create-without-enrollments.input';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';

@InputType()
export class DefinedAcademyCourseUpsertWithoutEnrollmentsInput {

    @Field(() => DefinedAcademyCourseUpdateWithoutEnrollmentsInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutEnrollmentsInput)
    update!: DefinedAcademyCourseUpdateWithoutEnrollmentsInput;

    @Field(() => DefinedAcademyCourseCreateWithoutEnrollmentsInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutEnrollmentsInput)
    create!: DefinedAcademyCourseCreateWithoutEnrollmentsInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;
}
