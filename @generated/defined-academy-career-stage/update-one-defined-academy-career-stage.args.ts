import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageUpdateInput } from './defined-academy-career-stage-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyCareerStageArgs {

    @Field(() => DefinedAcademyCareerStageUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateInput)
    data!: DefinedAcademyCareerStageUpdateInput;

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;
}
