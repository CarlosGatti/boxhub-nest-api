import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseUpdateWithoutEnrollmentsInput } from './defined-academy-course-update-without-enrollments.input';

@InputType()
export class DefinedAcademyCourseUpdateToOneWithWhereWithoutEnrollmentsInput {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseUpdateWithoutEnrollmentsInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutEnrollmentsInput)
    data!: DefinedAcademyCourseUpdateWithoutEnrollmentsInput;
}
