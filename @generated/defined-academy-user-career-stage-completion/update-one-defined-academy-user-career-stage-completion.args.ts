import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionUpdateInput } from './defined-academy-user-career-stage-completion-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyUserCareerStageCompletionArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateInput)
    data!: DefinedAcademyUserCareerStageCompletionUpdateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;
}
