import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentCreateInput } from './defined-academy-career-stage-content-create.input';
import { DefinedAcademyCareerStageContentUpdateInput } from './defined-academy-career-stage-content-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyCareerStageContentArgs {

    @Field(() => DefinedAcademyCareerStageContentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyCareerStageContentCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentCreateInput)
    create!: DefinedAcademyCareerStageContentCreateInput;

    @Field(() => DefinedAcademyCareerStageContentUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentUpdateInput)
    update!: DefinedAcademyCareerStageContentUpdateInput;
}
