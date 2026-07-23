import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageScalarWhereInput } from './defined-academy-career-stage-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageUpdateManyMutationInput } from './defined-academy-career-stage-update-many-mutation.input';

@InputType()
export class DefinedAcademyCareerStageUpdateManyWithWhereWithoutJourneyInput {

    @Field(() => DefinedAcademyCareerStageScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageScalarWhereInput)
    where!: DefinedAcademyCareerStageScalarWhereInput;

    @Field(() => DefinedAcademyCareerStageUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateManyMutationInput)
    data!: DefinedAcademyCareerStageUpdateManyMutationInput;
}
