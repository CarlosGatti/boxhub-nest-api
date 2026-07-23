import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDefinedAcademyUserCareerStageCompletionArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;
}
