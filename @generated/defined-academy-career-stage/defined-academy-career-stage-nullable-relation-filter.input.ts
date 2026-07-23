import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';

@InputType()
export class DefinedAcademyCareerStageNullableRelationFilter {

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    is?: DefinedAcademyCareerStageWhereInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    isNot?: DefinedAcademyCareerStageWhereInput;
}
