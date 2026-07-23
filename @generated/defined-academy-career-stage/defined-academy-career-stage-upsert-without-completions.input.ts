import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageUpdateWithoutCompletionsInput } from './defined-academy-career-stage-update-without-completions.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateWithoutCompletionsInput } from './defined-academy-career-stage-create-without-completions.input';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';

@InputType()
export class DefinedAcademyCareerStageUpsertWithoutCompletionsInput {

    @Field(() => DefinedAcademyCareerStageUpdateWithoutCompletionsInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateWithoutCompletionsInput)
    update!: DefinedAcademyCareerStageUpdateWithoutCompletionsInput;

    @Field(() => DefinedAcademyCareerStageCreateWithoutCompletionsInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateWithoutCompletionsInput)
    create!: DefinedAcademyCareerStageCreateWithoutCompletionsInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;
}
