import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentWhereInput } from './defined-academy-career-stage-content-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyCareerStageContentArgs {

    @Field(() => DefinedAcademyCareerStageContentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereInput)
    where?: DefinedAcademyCareerStageContentWhereInput;
}
