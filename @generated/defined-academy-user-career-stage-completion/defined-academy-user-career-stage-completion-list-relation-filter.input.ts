import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionWhereInput } from './defined-academy-user-career-stage-completion-where.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionListRelationFilter {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereInput, {nullable:true})
    every?: DefinedAcademyUserCareerStageCompletionWhereInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereInput, {nullable:true})
    some?: DefinedAcademyUserCareerStageCompletionWhereInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereInput, {nullable:true})
    none?: DefinedAcademyUserCareerStageCompletionWhereInput;
}
