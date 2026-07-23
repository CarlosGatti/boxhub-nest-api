import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionScalarWhereInput } from './defined-academy-user-career-stage-completion-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionUpdateManyMutationInput } from './defined-academy-user-career-stage-completion-update-many-mutation.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutStageInput {

    @Field(() => DefinedAcademyUserCareerStageCompletionScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionScalarWhereInput)
    where!: DefinedAcademyUserCareerStageCompletionScalarWhereInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateManyMutationInput)
    data!: DefinedAcademyUserCareerStageCompletionUpdateManyMutationInput;
}
