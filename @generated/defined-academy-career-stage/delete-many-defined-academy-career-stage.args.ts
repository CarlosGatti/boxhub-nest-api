import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyCareerStageArgs {

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;
}
