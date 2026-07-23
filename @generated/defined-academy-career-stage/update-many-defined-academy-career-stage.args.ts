import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageUpdateManyMutationInput } from './defined-academy-career-stage-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyCareerStageArgs {

    @Field(() => DefinedAcademyCareerStageUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateManyMutationInput)
    data!: DefinedAcademyCareerStageUpdateManyMutationInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;
}
