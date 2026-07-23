import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileUpdateWithoutCurrentStageInput } from './defined-academy-user-career-profile-update-without-current-stage.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutCurrentStageInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileUpdateWithoutCurrentStageInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithoutCurrentStageInput)
    data!: DefinedAcademyUserCareerProfileUpdateWithoutCurrentStageInput;
}
