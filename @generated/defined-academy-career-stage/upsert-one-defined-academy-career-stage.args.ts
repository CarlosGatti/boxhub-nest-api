import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateInput } from './defined-academy-career-stage-create.input';
import { DefinedAcademyCareerStageUpdateInput } from './defined-academy-career-stage-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyCareerStageArgs {

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => DefinedAcademyCareerStageCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateInput)
    create!: DefinedAcademyCareerStageCreateInput;

    @Field(() => DefinedAcademyCareerStageUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateInput)
    update!: DefinedAcademyCareerStageUpdateInput;
}
