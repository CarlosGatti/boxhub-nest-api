import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateWithoutCompletionsInput } from './defined-academy-career-stage-create-without-completions.input';

@InputType()
export class DefinedAcademyCareerStageCreateOrConnectWithoutCompletionsInput {

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => DefinedAcademyCareerStageCreateWithoutCompletionsInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateWithoutCompletionsInput)
    create!: DefinedAcademyCareerStageCreateWithoutCompletionsInput;
}
