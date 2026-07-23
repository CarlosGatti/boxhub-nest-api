import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';

@InputType()
export class DefinedAcademyCareerStageListRelationFilter {

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    every?: DefinedAcademyCareerStageWhereInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    some?: DefinedAcademyCareerStageWhereInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    none?: DefinedAcademyCareerStageWhereInput;
}
