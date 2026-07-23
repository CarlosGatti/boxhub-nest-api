import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateInput } from './defined-academy-career-stage-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyCareerStageArgs {

    @Field(() => DefinedAcademyCareerStageCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateInput)
    data!: DefinedAcademyCareerStageCreateInput;
}
