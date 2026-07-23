import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentUpdateWithoutStageInput } from './defined-academy-career-stage-content-update-without-stage.input';

@InputType()
export class DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutStageInput {

    @Field(() => DefinedAcademyCareerStageContentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyCareerStageContentUpdateWithoutStageInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentUpdateWithoutStageInput)
    data!: DefinedAcademyCareerStageContentUpdateWithoutStageInput;
}
