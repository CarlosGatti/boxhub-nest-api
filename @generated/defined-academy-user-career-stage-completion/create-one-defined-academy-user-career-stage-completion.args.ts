import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCreateInput } from './defined-academy-user-career-stage-completion-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyUserCareerStageCompletionArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateInput)
    data!: DefinedAcademyUserCareerStageCompletionCreateInput;
}
