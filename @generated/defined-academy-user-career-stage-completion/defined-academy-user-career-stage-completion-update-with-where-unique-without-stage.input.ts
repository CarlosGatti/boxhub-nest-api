import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput } from './defined-academy-user-career-stage-completion-update-without-stage.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutStageInput {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput)
    data!: DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput;
}
