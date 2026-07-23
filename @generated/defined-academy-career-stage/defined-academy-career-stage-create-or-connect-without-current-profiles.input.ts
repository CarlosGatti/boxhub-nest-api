import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput } from './defined-academy-career-stage-create-without-current-profiles.input';

@InputType()
export class DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput {

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput)
    create!: DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput;
}
