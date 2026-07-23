import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentScalarWhereInput } from './defined-academy-career-stage-content-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentUpdateManyMutationInput } from './defined-academy-career-stage-content-update-many-mutation.input';

@InputType()
export class DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutCourseInput {

    @Field(() => DefinedAcademyCareerStageContentScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentScalarWhereInput)
    where!: DefinedAcademyCareerStageContentScalarWhereInput;

    @Field(() => DefinedAcademyCareerStageContentUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentUpdateManyMutationInput)
    data!: DefinedAcademyCareerStageContentUpdateManyMutationInput;
}
