import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentUpdateInput } from './defined-academy-career-stage-content-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyCareerStageContentArgs {

    @Field(() => DefinedAcademyCareerStageContentUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentUpdateInput)
    data!: DefinedAcademyCareerStageContentUpdateInput;

    @Field(() => DefinedAcademyCareerStageContentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>;
}
