import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentUpdateManyMutationInput } from './defined-academy-career-stage-content-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentWhereInput } from './defined-academy-career-stage-content-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyCareerStageContentArgs {

    @Field(() => DefinedAcademyCareerStageContentUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentUpdateManyMutationInput)
    data!: DefinedAcademyCareerStageContentUpdateManyMutationInput;

    @Field(() => DefinedAcademyCareerStageContentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereInput)
    where?: DefinedAcademyCareerStageContentWhereInput;
}
