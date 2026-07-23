import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionCreateInput } from './defined-academy-user-career-stage-completion-create.input';
import { DefinedAcademyUserCareerStageCompletionUpdateInput } from './defined-academy-user-career-stage-completion-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyUserCareerStageCompletionArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateInput)
    create!: DefinedAcademyUserCareerStageCompletionCreateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateInput)
    update!: DefinedAcademyUserCareerStageCompletionUpdateInput;
}
