import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseScalarWhereInput } from './defined-academy-course-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseUpdateManyMutationInput } from './defined-academy-course-update-many-mutation.input';

@InputType()
export class DefinedAcademyCourseUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => DefinedAcademyCourseScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyCourseScalarWhereInput)
    where!: DefinedAcademyCourseScalarWhereInput;

    @Field(() => DefinedAcademyCourseUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateManyMutationInput)
    data!: DefinedAcademyCourseUpdateManyMutationInput;
}
