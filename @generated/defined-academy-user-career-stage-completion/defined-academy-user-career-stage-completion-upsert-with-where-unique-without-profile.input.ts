import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionUpdateWithoutProfileInput } from './defined-academy-user-career-stage-completion-update-without-profile.input';
import { DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput } from './defined-academy-user-career-stage-completion-create-without-profile.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutProfileInput {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateWithoutProfileInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateWithoutProfileInput)
    update!: DefinedAcademyUserCareerStageCompletionUpdateWithoutProfileInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput)
    create!: DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput;
}
