import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentWhereInput } from './defined-academy-career-stage-content-where.input';

@InputType()
export class DefinedAcademyCareerStageContentListRelationFilter {

    @Field(() => DefinedAcademyCareerStageContentWhereInput, {nullable:true})
    every?: DefinedAcademyCareerStageContentWhereInput;

    @Field(() => DefinedAcademyCareerStageContentWhereInput, {nullable:true})
    some?: DefinedAcademyCareerStageContentWhereInput;

    @Field(() => DefinedAcademyCareerStageContentWhereInput, {nullable:true})
    none?: DefinedAcademyCareerStageContentWhereInput;
}
