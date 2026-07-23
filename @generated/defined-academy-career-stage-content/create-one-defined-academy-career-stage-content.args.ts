import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateInput } from './defined-academy-career-stage-content-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyCareerStageContentArgs {

    @Field(() => DefinedAcademyCareerStageContentCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentCreateInput)
    data!: DefinedAcademyCareerStageContentCreateInput;
}
