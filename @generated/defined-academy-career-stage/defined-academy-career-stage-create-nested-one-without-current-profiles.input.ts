import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput } from './defined-academy-career-stage-create-without-current-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput } from './defined-academy-career-stage-create-or-connect-without-current-profiles.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';

@InputType()
export class DefinedAcademyCareerStageCreateNestedOneWithoutCurrentProfilesInput {

    @Field(() => DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput)
    create?: DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput;

    @Field(() => DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput)
    connectOrCreate?: DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput;

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;
}
