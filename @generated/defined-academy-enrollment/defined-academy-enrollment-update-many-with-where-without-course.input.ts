import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentScalarWhereInput } from './defined-academy-enrollment-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentUpdateManyMutationInput } from './defined-academy-enrollment-update-many-mutation.input';

@InputType()
export class DefinedAcademyEnrollmentUpdateManyWithWhereWithoutCourseInput {

    @Field(() => DefinedAcademyEnrollmentScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentScalarWhereInput)
    where!: DefinedAcademyEnrollmentScalarWhereInput;

    @Field(() => DefinedAcademyEnrollmentUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateManyMutationInput)
    data!: DefinedAcademyEnrollmentUpdateManyMutationInput;
}
