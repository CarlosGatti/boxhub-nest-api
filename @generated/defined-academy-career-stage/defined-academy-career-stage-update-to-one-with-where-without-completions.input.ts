import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageUpdateWithoutCompletionsInput } from './defined-academy-career-stage-update-without-completions.input';

@InputType()
export class DefinedAcademyCareerStageUpdateToOneWithWhereWithoutCompletionsInput {

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;

    @Field(() => DefinedAcademyCareerStageUpdateWithoutCompletionsInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateWithoutCompletionsInput)
    data!: DefinedAcademyCareerStageUpdateWithoutCompletionsInput;
}
