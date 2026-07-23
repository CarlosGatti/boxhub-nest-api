import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput } from './defined-academy-user-career-stage-completion-update-without-stage.input';
import { DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput } from './defined-academy-user-career-stage-completion-create-without-stage.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutStageInput {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput)
    update!: DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput)
    create!: DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput;
}
