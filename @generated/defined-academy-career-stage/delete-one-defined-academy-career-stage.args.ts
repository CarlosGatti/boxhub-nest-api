import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDefinedAcademyCareerStageArgs {

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;
}
