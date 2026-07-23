import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput } from './defined-academy-user-career-stage-completion-create-without-stage.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput)
    create!: DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput;
}
