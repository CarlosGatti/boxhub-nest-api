import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionWhereInput } from './defined-academy-user-career-stage-completion-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyUserCareerStageCompletionArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereInput)
    where?: DefinedAcademyUserCareerStageCompletionWhereInput;
}
