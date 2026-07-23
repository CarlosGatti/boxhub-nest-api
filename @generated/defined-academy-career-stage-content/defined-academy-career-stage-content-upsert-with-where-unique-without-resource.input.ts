import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentUpdateWithoutResourceInput } from './defined-academy-career-stage-content-update-without-resource.input';
import { DefinedAcademyCareerStageContentCreateWithoutResourceInput } from './defined-academy-career-stage-content-create-without-resource.input';

@InputType()
export class DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutResourceInput {

    @Field(() => DefinedAcademyCareerStageContentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyCareerStageContentUpdateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentUpdateWithoutResourceInput)
    update!: DefinedAcademyCareerStageContentUpdateWithoutResourceInput;

    @Field(() => DefinedAcademyCareerStageContentCreateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentCreateWithoutResourceInput)
    create!: DefinedAcademyCareerStageContentCreateWithoutResourceInput;
}
