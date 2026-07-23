import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionUpdateManyMutationInput } from './defined-academy-user-career-stage-completion-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionWhereInput } from './defined-academy-user-career-stage-completion-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyUserCareerStageCompletionArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateManyMutationInput)
    data!: DefinedAcademyUserCareerStageCompletionUpdateManyMutationInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereInput)
    where?: DefinedAcademyUserCareerStageCompletionWhereInput;
}
